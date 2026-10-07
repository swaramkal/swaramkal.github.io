import {
  Code2,
  Database,
  Globe,
  Github,
  Instagram,
  Laptop,
  Linkedin,
  Mail,
  Network,
  Phone,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export const profile = {
  name: 'Kintali Swaramkal',
  title: 'BCA Undergraduate | Aspiring Software Developer',
  location: 'Visakhapatnam, Andhra Pradesh, India',
  email: 'swaramkalkintali@gmail.com',
  phone: '+91 98850 59321',
  phoneHref: 'tel:+919885059321',
  linkedin: 'https://www.linkedin.com/in/swaramkal-kintali',
  github: 'https://github.com/swaram888',
  instagram: 'https://www.instagram.com/swaram888',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export type Project = {
  number: string
  title: string
  category: string
  description: string
  href: string
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Hire Bridge',
    category: 'Product concept',
    description:
      'A technology-based project focused on connecting job seekers and employers, helping users discover opportunities and improving the hiring process.',
    href: profile.github,
  },
  {
    number: '02',
    title: 'Web Development Projects',
    category: 'Web development',
    description:
      'Creating and experimenting with HTML-based websites and web applications, focusing on user interfaces and practical functionality.',
    href: profile.github,
  },
  {
    number: '03',
    title: 'MANA TAXI SERVICE',
    category: 'Full web app concept',
    description:
      'Cab-booking web application concept with customer booking, admin dashboard, driver login, booking management and driver acceptance features.',
    href: profile.github,
  },
]

export type SkillGroup = {
  category: string
  icon: LucideIcon
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'Programming', icon: Code2, skills: ['C', 'C++', 'Java', 'Python'] },
  {
    category: 'Web development',
    icon: Globe,
    skills: ['HTML', 'Basic Web Development'],
  },
  { category: 'Database', icon: Database, skills: ['MySQL'] },
  {
    category: 'Networking',
    icon: Network,
    skills: ['Computer Networks', 'Cisco Packet Tracer', 'OSI Model', 'TCP/IP'],
  },
  { category: 'Operating systems', icon: Laptop, skills: ['Linux', 'Windows'] },
  { category: 'Tools', icon: Wrench, skills: ['Git', 'GitHub', 'Canva'] },
  {
    category: 'Emerging technology',
    icon: Sparkles,
    skills: ['Artificial Intelligence', 'AI Tools'],
  },
  {
    category: 'Soft skills',
    icon: Users,
    skills: [
      'Problem Solving',
      'Quick Learning',
      'Communication',
      'Teamwork',
      'Adaptability',
      'Creativity',
      'Self-Learning',
      'Time Management',
    ],
  },
]

export const education = [
  {
    degree: 'BCA — Undergraduate',
    institution: 'Vaishnavi College',
    period: '2025 – Present',
    result: 'CGPA: —',
  },
  {
    degree: 'Intermediate / 12th Standard',
    institution: 'Dr. Lankapalli Bullayya College',
    period: '2023 – 2025',
    result: '531/1000 · 53.10%',
  },
  {
    degree: '10th Standard',
    institution: 'Ravindra Bharathi School',
    period: '2022 – 2023',
    result: '414/600 · 69.00%',
  },
]

export const interests = [
  'Software Development',
  'Web Development',
  'Computer Networking',
  'Database Management',
  'Artificial Intelligence',
  'Application Development',
  'Emerging Technologies',
]

export const faqs = [
  {
    question: 'What kind of developer am I becoming?',
    answer:
      'An aspiring software developer with interests spanning programming, web development, databases, networking and emerging technologies.',
  },
  {
    question: 'What am I currently learning?',
    answer:
      "I'm building practical knowledge in C, C++, Java, Python, HTML, MySQL, Linux, networking and AI tools.",
  },
  {
    question: 'What motivates my projects?',
    answer:
      'Practical problems, experimentation and the opportunity to turn an idea into something people can use.',
  },
  {
    question: 'What is my career objective?',
    answer:
      'To gain industry experience, keep learning new technologies and contribute to meaningful real-world software projects.',
  },
]

export const socialLinks: {
  label: string
  href: string
  icon: LucideIcon
  external?: boolean
}[] = [
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin, external: true },
  { label: 'GitHub', href: profile.github, icon: Github, external: true },
  { label: 'Instagram', href: profile.instagram, icon: Instagram, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', href: profile.phoneHref, icon: Phone },
]

export const contactLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/swaramkal-kintali',
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/swaram888',
    href: profile.github,
    icon: Github,
    external: true,
  },
  {
    label: 'Instagram',
    value: '@swaram888',
    href: profile.instagram,
    icon: Instagram,
    external: true,
  },
]

export const aboutFacts = [
  { label: 'Location', value: 'Visakhapatnam, Andhra Pradesh', icon: Globe },
  { label: 'Education', value: 'BCA · 2025–Present', icon: Code2 },
  { label: 'Focus', value: 'Software Development', icon: Sparkles },
  { label: 'Languages', value: 'English · Telugu', icon: Users },
]

export const siteEmail = `mailto:${profile.email}`
export const sitePhone = profile.phoneHref
