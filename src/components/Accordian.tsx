'use client';

import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: 'What is AttackNewz?',
    answer: (
      <>
        AttackNewz is a real-time interactive platform that visualizes global incidents such as cyberattacks, natural disasters, and political unrest. It helps users stay informed and make data-driven decisions.
      </>
    ),
  },
  {
    question: 'Where is the data sourced from?',
    answer: (
      <>
        We aggregate and curate data from trusted sources like WHO, UN, national governments, and global news outlets. In the future, we plan to integrate APIs from open government and satellite data platforms.
      </>
    ),
  },
  {
    question: 'Can I contribute or report incidents?',
    answer: (
      <>
        Yes, we’re planning to open a public submission portal soon. For now, you can reach out to us via email or GitHub.
      </>
    ),
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-7xl px-2 mx-auto my-10 space-y-4">
      {faqs.map((item, index) => (
        <div key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full p-5 text-left font-medium font-sans transition"
            aria-expanded={activeIndex === index}
          >
            <span>{item.question}</span>
            <FaChevronDown
              className={`w-5 h-5 transform transition-transform duration-200 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {activeIndex === index && (
            <div className="px-5 pb-5 font-sans text-sm">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
