import React from "react";
import { Section } from "../Section";

interface PricingPlan {
  name: string;
  price: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingProps {
  heading: string;
  copy?: string;
  plans: PricingPlan[];
}

export function Pricing({ heading, copy, plans }: PricingProps) {
  return (
    <Section id="pricing" background="muted">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {heading}
        </h2>
        {copy && (
          <p className="mb-8 text-sm text-slate-600 md:text-base">{copy}</p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl border bg-white p-6 text-left shadow-sm ${
              plan.highlighted
                ? "border-brand shadow-brand/10"
                : "border-slate-100 shadow-slate-100"
            }`}
          >
            <h3 className="mb-1 text-sm font-semibold text-slate-900">
              {plan.name}
            </h3>
            <p className="mb-4 text-2xl font-semibold text-slate-900">
              {plan.price}
              <span className="text-xs font-normal text-slate-500">/month</span>
            </p>
            {plan.description && (
              <p className="mb-4 text-sm text-slate-600">{plan.description}</p>
            )}
            <ul className="mb-6 space-y-2 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-auto rounded-full px-4 py-2 text-sm font-semibold transition ${
                plan.highlighted
                  ? "bg-brand text-white hover:bg-brand-dark"
                  : "border border-slate-200 bg-white text-slate-900 hover:border-brand"
              }`}
            >
              Choose plan
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}


