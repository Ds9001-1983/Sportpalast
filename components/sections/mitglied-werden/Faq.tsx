"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { MEMBERSHIP_FAQ as faqs } from "@/lib/content/faq";

export function Faq() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="divide-y divide-border rounded-3xl border border-border bg-bg-elevated/40"
    >
      {faqs.map((f, i) => (
        <Accordion.Item key={i} value={`item-${i}`} className="group">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:text-brand md:px-8">
              <span className="text-base font-display font-semibold md:text-lg">
                {f.q}
              </span>
              <ChevronDown
                size={18}
                className="shrink-0 text-fg-muted transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-brand"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-fg-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-6 pb-6 pr-12 text-sm leading-relaxed md:px-8 md:pb-7 md:pr-16">
              {f.a}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
