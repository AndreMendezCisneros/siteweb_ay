"use client";

import { useState } from "react";

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="mt-8 divide-y divide-border border-y border-border bg-surface">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <li key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-1 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink sm:px-2"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-display font-semibold text-ink">{item.q}</span>
              <span className="font-mono text-accent-2" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="px-1 pb-4 text-sm leading-relaxed text-muted sm:px-2">{item.a}</p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
