"use client";

import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FAQ } from "../../components/sections/FAQ";
import { Section } from "../../components/Section";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Earn", href: "/#earn" },
  { label: "Industries", href: "/#industries" },
  { label: "Track", href: "/#track" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/#about" }
];

type FaqCategoryId =
  | "all"
  | "app"
  | "delivery"
  | "payments"
  | "returns"
  | "drivers"
  | "business";

const faqCategories: { id: FaqCategoryId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "app", label: "Shaloz App" },
  { id: "delivery", label: "Delivery" },
  { id: "payments", label: "Payments" },
  { id: "returns", label: "Returns & Refunds" },
  { id: "drivers", label: "Drivers" },
  { id: "business", label: "Business" }
];

const faqItems = [
  {
    question: "What is Shaloz?",
    answer:
      "Shaloz is a local delivery platform that connects businesses and drivers to offer fast, secure package delivery within your city.",
    category: "app" as FaqCategoryId
  },
  {
    question: "How does Shaloz work?",
    answer:
      "Businesses create delivery requests in the Shaloz app. Nearby drivers accept jobs, pick up the package, and deliver it to your customer with live tracking.",
    category: "delivery" as FaqCategoryId
  },
  {
    question: "Where is Shaloz available?",
    answer:
      "We are expanding to new cities regularly. You can check availability directly in the app by entering your pickup address.",
    category: "business" as FaqCategoryId
  },
  {
    question: "What can I send using Shaloz?",
    answer:
      "Most everyday parcels such as documents, retail products, and small to medium packages are supported. Restricted or hazardous items are not allowed.",
    category: "delivery" as FaqCategoryId
  },
  {
    question: "Can I track my delivery in real-time?",
    answer:
      "Yes. Both you and your customers can see live driver location and estimated arrival time from within the Shaloz app.",
    category: "delivery" as FaqCategoryId
  },
  {
    question: "How do I become a Shaloz driver?",
    answer:
      "Download the Shaloz Driver app, complete your profile and document checks, and once approved you can start accepting nearby delivery jobs.",
    category: "drivers" as FaqCategoryId
  }
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategoryId>("all");

  const visibleItems =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header links={navLinks} />

      <main>
        {/* Top hero / heading block */}
        <Section background="default">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Support
            </p>
            <h1 className="mb-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mb-5 max-w-xl text-sm text-slate-600 md:text-base">
              Find quick help for common questions about Shaloz deliveries,
              earnings, and using the app. Still stuck? You can always reach out
              to our help center.
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-[11px]">
              {faqCategories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-full border px-3 py-1 transition ${
                      isActive
                        ? "border-[#3E63FF] bg-[#3E63FF] text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-600 hover:border-[#3E63FF]/60 hover:text-slate-900"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Section>

        {/* FAQ accordion list matching center card style */}
        <FAQ heading="What would you like to know?" items={visibleItems} />

        {/* Download our app banner similar to Figma section above footer */}
        <Section background="muted">
          <div className="grid items-center gap-8 rounded-3xl bg-white px-6 py-8 shadow-sm shadow-slate-100 md:grid-cols-[1.3fr,1fr] md:px-10 md:py-10">
            <div>
              <h2 className="mb-2 text-xl font-semibold text-slate-900 md:text-2xl">
                Download Our App
              </h2>
              <p className="mb-4 text-sm text-slate-600 md:max-w-sm">
                Download Shaloz on the App Store or Google Play to manage
                deliveries, track orders, and stay connected on the go.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-xs font-medium text-white"
                >
                  App Store
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-xs font-medium text-white"
                >
                  Google Play
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:justify-items-end">
              <div className="w-full max-w-xs rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-left">
                <p className="text-xs font-semibold text-slate-900">
                  Download on the App Store
                </p>
                <div className="mt-2 h-20 w-20 rounded bg-white" />
              </div>
              <div className="w-full max-w-xs rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-left">
                <p className="text-xs font-semibold text-slate-900">
                  Download on Google Play
                </p>
                <div className="mt-2 h-20 w-20 rounded bg-white" />
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}

