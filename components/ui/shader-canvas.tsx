
"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "./shader-canvas-utils/motion";

export type ShaderCanvasStatus =
  | "starting"
  | "running"
  | "unsupported"
  | "error";

export interface ShaderCanvasProps {
  fragment?: string;
  colors?: Record<string, string>;
  resolution?: number;
  stillTime?: number;
  showErrors?: boolean;
  onError?: (message: string) => void;
  onStatusChange?: (status: ShaderCanvasStatus) => void;
  label?: string;
  children?: ReactNode;
  className?: string;
}

const DEFAULT_FRAGMENT = `
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 p = uv * 2.0 - 1.0;
  p.x *= u_resolution.x / u_resolution.y;

  vec2 m = (u_pointer * 2.0 - 1.0) *
    vec2(u_resolution.x / u_resolution.y, 1.0);

  float t = u_time * 0.25;

  float wave = sin(
    p.x * 2.1 + t * 2.0 +
    sin(p.y * 3.0 - t) * 0.8
  ) * 0.5 + 0.5;

  float glow = 0.35 /
    (0.35 + length(p - m) * length(p - m) * 1.6);

  float band = smoothstep(
    0.15,
    0.95,
    wave * 0.7 + glow * 0.6 - uv.y * 0.35
  );

  vec3 colour = mix(u_surface, u_accent, band * 0.85);

  colour = mix(
    colour,
    u_ink,
    smoothstep(0.92, 1.0, band) * 0.12
  );

  gl_FragColor = vec4(colour, 1.0);
}
`;

const DEFAULT_COLORS = {
  u_accent: "var(--pf-accent)",
  u_ink: "var(--pf-text)",
  u_surface: "var(--pf-bg)",
};

const VERTEX = `
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

function toRgb(
  value: string,
  host: HTMLElement,
  probe: CanvasRenderingContext2D | null,
): [number, number, number] {
  host.style.color = value;

  const computed = getComputedStyle(host).color;

  host.style.color = "";

  if (!probe) return [0.5, 0.5, 0.5];

  probe.clearRect(0, 0, 1, 1);
  probe.fillStyle = computed;
  probe.fillRect(0, 0, 1, 1);

  const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;

  return [r! / 255, g! / 255, b! / 255];
}

export function ShaderCanvas({
  fragment = DEFAULT_FRAGMENT,
  colors = DEFAULT_COLORS,
  resolution = 1,
  stillTime = 4,
  showErrors = false,
  onError,
  onStatusChange,
  label,
  children,
  className,
}: ShaderCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const reducedMotion = usePrefersReducedMotion();

  const [status, setStatus] =
    useState<ShaderCanvasStatus>("starting");

  const [error, setError] = useState<string | null>(null);

  const callbacks = useRef({ onError, onStatusChange });

  callbacks.current = { onError, onStatusChange };

  const colourKey = JSON.stringify(colors);

  useEffect(() => {
    callbacks.current.onStatusChange?.(status);
  }, [status]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      premultipliedAlpha: false,
    });

    if (!gl) {
      setStatus("unsupported");
      return;
    }

    const palette = JSON.parse(colourKey) as Record<string, string>;

    const names = Object.keys(palette);

    const header = [
      "precision mediump float;",
      "uniform float u_time;",
      "uniform vec2 u_resolution;",
      "uniform vec2 u_pointer;",
      ...names.map((name) => `uniform vec3 ${name};`),
    ].join("\n");

    const fail = (message: string) => {
      setError(message);
      setStatus("error");
      callbacks.current.onError?.(message);
    };

    const headerLines = names.length + 4;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);

      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const log = (gl.getShaderInfoLog(shader) ?? "")
          .replace(/[^\x20-\x7e\n]/g, "")
          .trim();

        const shifted =
          type === gl.FRAGMENT_SHADER
            ? log.replace(
                /(\d+):(\d+)/g,
                (_match, file, line) =>
                  `${file}:${Math.max(
                    1,
                    Number(line) - headerLines,
                  )}`,
              )
            : log;

        fail(shifted || "The shader did not compile.");

        gl.deleteShader(shader);

        return null;
      }

      return shader;
    };

    const vertex = compile(gl.VERTEX_SHADER, VERTEX);

    const pixel =
      vertex &&
      compile(gl.FRAGMENT_SHADER, `${header}\n${fragment}`);

    if (!vertex || !pixel) return;

    const program = gl.createProgram();

    if (!program) {
      fail("Unable to create WebGL program.");
      return;
    }

    gl.attachShader(program, vertex);
    gl.attachShader(program, pixel);

    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      fail(
        gl.getProgramInfoLog(program)?.trim() ||
          "The shader did not link.",
      );
      return;
    }

    gl.useProgram(program);

    setError(null);

    const buffer = gl.createBuffer();

    if (!buffer) {
      fail("Unable to create WebGL buffer.");
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
        3, -1,
        -1, 3,
      ]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(
      program,
      "a_position",
    );

    gl.enableVertexAttribArray(position);

    gl.vertexAttribPointer(
      position,
      2,
      gl.FLOAT,
      false,
      0,
      0,
    );

    const uniform = (name: string) =>
      gl.getUniformLocation(program, name);

    const uTime = uniform("u_time");
    const uResolution = uniform("u_resolution");
    const uPointer = uniform("u_pointer");

    const colourUniforms = names.map(
      (name) => [name, uniform(name)] as const,
    );

    const probeCanvas = document.createElement("canvas");

    probeCanvas.width = 1;
    probeCanvas.height = 1;

    const probe = probeCanvas.getContext("2d", {
      willReadFrequently: true,
    });

    const applyColours = () => {
      for (const [name, location] of colourUniforms) {
        if (location) {
          gl.uniform3fv(
            location,
            toRgb(palette[name]!, canvas, probe),
          );
        }
      }
    };

    const pointer = {
      x: 0.5,
      y: 0.5,
      targetX: 0.5,
      targetY: 0.5,
    };

    let frame = 0;
    let visible = true;
    let elapsed = 0;
    let last = 0;
    let lost = false;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      const ratio =
        Math.min(2, window.devicePixelRatio || 1) *
        resolution;

      canvas.width = Math.max(
        1,
        Math.round(rect.width * ratio),
      );

      canvas.height = Math.max(
        1,
        Math.round(rect.height * ratio),
      );

      gl.viewport(
        0,
        0,
        canvas.width,
        canvas.height,
      );
    };

    const render = (time: number) => {
      if (lost) return;

      gl.uniform1f(uTime, time);

      gl.uniform2f(
        uResolution,
        canvas.width,
        canvas.height,
      );

      gl.uniform2f(
        uPointer,
        pointer.x,
        pointer.y,
      );

      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now: number) => {
      if (last) {
        elapsed += Math.min(0.1, (now - last) / 1000);
      }

      last = now;

      pointer.x +=
        (pointer.targetX - pointer.x) * 0.06;

      pointer.y +=
        (pointer.targetY - pointer.y) * 0.06;

      render(elapsed);

      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      last = 0;
    };

    const start = () => {
      stop();

      if (reducedMotion) {
        render(stillTime);
      } else if (visible && !document.hidden) {
        frame = requestAnimationFrame(loop);
      }
    };

    resize();
    applyColours();

    render(reducedMotion ? stillTime : 0);

    setStatus("running");

    start();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      render(reducedMotion ? stillTime : elapsed);
    });

    resizeObserver.observe(canvas);

    const intersection =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(([entry]) => {
            visible = Boolean(entry?.isIntersecting);

            if (visible) start();
            else stop();
          });

    intersection?.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    document.addEventListener(
      "visibilitychange",
      onVisibility,
    );

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      pointer.targetX = Math.min(
        1,
        Math.max(
          0,
          (event.clientX - rect.left) / rect.width,
        ),
      );

      pointer.targetY = Math.min(
        1,
        Math.max(
          0,
          1 - (event.clientY - rect.top) / rect.height,
        ),
      );
    };

    window.addEventListener(
      "pointermove",
      onPointerMove,
      { passive: true },
    );

    const themeObserver = new MutationObserver(() => {
      applyColours();
      render(reducedMotion ? stillTime : elapsed);
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [
        "class",
        "data-theme",
        "style",
      ],
    });

    const onLost = (event: Event) => {
      event.preventDefault();

      lost = true;

      stop();

      setStatus("unsupported");
    };

    canvas.addEventListener(
      "webglcontextlost",
      onLost,
    );

    return () => {
      stop();

      resizeObserver.disconnect();
      intersection?.disconnect();
      themeObserver.disconnect();

      document.removeEventListener(
        "visibilitychange",
        onVisibility,
      );

      window.removeEventListener(
        "pointermove",
        onPointerMove,
      );

      canvas.removeEventListener(
        "webglcontextlost",
        onLost,
      );

      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(pixel);
      gl.deleteBuffer(buffer);
    };
  }, [
    fragment,
    colourKey,
    resolution,
    stillTime,
    reducedMotion,
  ]);

  const drawing = status === "running";

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 110%, var(--pf-accent) 0%, color-mix(in oklab, var(--pf-accent) 35%, var(--pf-bg)) 45%, var(--pf-bg) 100%)",
        }}
      />

      <canvas
        ref={canvasRef}
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        className={cn(
          "absolute inset-0 -z-10 block size-full",
          !drawing && "invisible",
        )}
      />

      {showErrors && error && (
        <pre
          role="alert"
          tabIndex={0}
          className="absolute inset-x-3 top-3 z-10 max-h-[60%] overflow-auto whitespace-pre-wrap rounded-lg border border-destructive bg-background p-3 font-mono text-[11px] leading-relaxed text-destructive"
        >
          {error}
        </pre>
      )}

      {children}
    </div>
  );
}

export default ShaderCanvas;
