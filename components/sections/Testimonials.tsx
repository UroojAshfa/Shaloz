import React from "react";
import { Section } from "../Section";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialsProps {
  heading: string;
  copy?: string;
  testimonials: Testimonial[];
}

export function Testimonials({
  heading,
  copy,
  testimonials
}: TestimonialsProps) {
  return (
    <Section id="testimonials" background="default">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {heading}
        </h2>
        {copy && (
          <p className="mb-8 text-sm text-slate-600 md:text-base">{copy}</p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex h-full flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 text-left shadow-sm shadow-slate-100"
          >
            <p className="mb-4 text-sm text-slate-700">&ldquo;{t.quote}&rdquo;</p>
            <figcaption className="mt-auto text-sm font-semibold text-slate-900">
              {t.name}
              <span className="mt-0.5 block text-xs font-normal text-slate-500">
                {t.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}


