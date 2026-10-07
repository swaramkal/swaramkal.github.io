'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const questions = [
  {
    question: 'What kind of developer am I becoming?',
    answer: 'An aspiring software developer with interests spanning programming, web development, databases, networking and emerging technologies.',
  },
  {
    question: 'What am I currently learning?',
    answer: "I'm building practical knowledge in C, C++, Java, Python, HTML, MySQL, Linux, networking and AI tools.",
  },
  {
    question: 'What motivates my projects?',
    answer: 'Practical problems, experimentation and the opportunity to turn an idea into something people can use.',
  },
  {
    question: 'What is my career objective?',
    answer: 'To gain industry experience, keep learning new technologies and contribute to meaningful real-world software projects.',
  },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div aria-label="Frequently asked questions" className="faq-list" data-reveal>
      {questions.map((item, index) => {
        const isOpen = openIndex === index
        const questionId = `faq-question-${index + 1}`
        const answerId = `faq-answer-${index + 1}`

        return (
          <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
            <h3>
              <button
                aria-controls={answerId}
                aria-expanded={isOpen}
                className="faq-trigger"
                id={questionId}
                onClick={() => setOpenIndex((current) => current === index ? null : index)}
                type="button"
              >
                <span className="faq-number">0{index + 1}</span>
                <span className="faq-question">{item.question}</span>
                <ChevronDown aria-hidden="true" className="faq-chevron" />
              </button>
            </h3>
            <div
              aria-hidden={!isOpen}
              aria-labelledby={questionId}
              className="faq-answer"
              id={answerId}
            >
              <div className="faq-answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default FaqAccordion
