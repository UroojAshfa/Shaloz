import React from "react";
import { Container } from "./Container";

type BackgroundVariant = "default" | "muted" | "brand";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: BackgroundVariant;
  containerClassName?: string;
}

const backgroundClasses: Record<BackgroundVariant, string> = {
  default: "bg-white",
  muted: "bg-slate-50",
  brand: "bg-brand-light"
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  background = "default"
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${backgroundClasses[background]} py-12 md:py-20 ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}


