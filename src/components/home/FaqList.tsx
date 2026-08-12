"use client";

import { useState } from "react";

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="mt-8 divide-y divide-border rounded-[var(--radius-lg)] border border-border bg-surface">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <li key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-[family-name:var(--font-syne)] font-semibold text-ink">
                {item.q}
              </span>
              <span className="text-primary" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
