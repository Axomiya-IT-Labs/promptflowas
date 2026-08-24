"use client";

import { useState } from "react";

import type {
  FAQItem,
  LocalizedFAQ,
} from "@/content/faq/general";

interface FAQAccordionProps {
  items: LocalizedFAQ[];
  locale: string;
}

export default function FAQAccordion({
  items,
  locale,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    null,
  );

  const language = locale === "as" ? "as" : "en";

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const faq: FAQItem = item[language];

        const isOpen = openIndex === index;

        const questionId = `faq-question-${language}-${index}`;
        const answerId = `faq-answer-${language}-${index}`;

        return (
          <div key={questionId}>
            <button
              type="button"
              id={questionId}
              aria-expanded={isOpen}
              aria-controls={answerId}
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 sm:px-6"
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
            >
              <span className="text-sm font-semibold leading-6 text-slate-950 sm:text-base">
                {faq.question}
              </span>

              <span
                aria-hidden="true"
                className={`flex size-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg leading-none text-slate-500 transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              hidden={!isOpen}
            >
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}