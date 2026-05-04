import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mb-10 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.24em] text-mint">{eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-8 text-slate-300">{description}</p> : null}
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
}
