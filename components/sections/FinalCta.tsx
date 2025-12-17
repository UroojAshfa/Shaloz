import React from "react";
import { Section } from "../Section";

interface FinalCtaProps {
  title: string;
  subtitle?: string;
  cta: { label: string; href: string };
}

export function FinalCta({ title, subtitle, cta }: FinalCtaProps) {
  return (
    <Section id="get-started" background="brand">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-slate-700 md:text-base">
              {subtitle}
            </p>
          )}
        </div>
        <a
          href={cta.href}
          className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
        >
          {cta.label}
        </a>
      </div>
    </Section>
  );
}


