import React from "react";
import { Section } from "../Section";

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQProps {
  heading: string;
  items: FaqItem[];
}

export function FAQ({ heading, items }: FAQProps) {
  return (
    <Section id="faq" background="default">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {heading}
        </h2>
      </div>

      <div className="mx-auto mt-6 max-w-2xl space-y-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-slate-100 bg-white p-4"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-2 text-sm font-semibold text-slate-900">
              <span>{item.question}</span>
              <span className="text-xs text-slate-400 group-open:hidden">
                +
              </span>
              <span className="hidden text-xs text-slate-400 group-open:inline">
                −
              </span>
            </summary>
            <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}


