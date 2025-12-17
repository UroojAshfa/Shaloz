import React from "react";
import { Section } from "../Section";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeaturesProps {
  eyebrow?: string;
  heading: string;
  copy: string;
  items: FeatureItem[];
}

export function Features({ eyebrow, heading, copy, items }: FeaturesProps) {
  return (
    <Section id="features" background="default">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark">
            {eyebrow}
          </p>
        )}
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {heading}
        </h2>
        <p className="mb-8 text-sm text-slate-600 md:text-base">{copy}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100"
          >
            <div className="mb-3 h-9 w-9 rounded-full bg-brand-light" />
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}


