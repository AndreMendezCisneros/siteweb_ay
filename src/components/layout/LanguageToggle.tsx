"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const locales = ["es", "en", "quy"] as const;

export function LanguageToggle({ current }: { current: string }) {
  const pathname = usePathname() || "/";
  const rest = pathname.replace(/^\/(es|en|quy)(?=\/|$)/, "") || "";

  return (
    <div className="flex items-center gap-1.5 text-xs font-medium" aria-label="Idioma / Language">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1.5">
          {index > 0 ? (
            <span className="text-muted" aria-hidden>
              /
            </span>
          ) : null}
          <Link
            href={`/${locale}${rest}`}
            aria-current={current === locale ? "true" : undefined}
            className={`uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
              current === locale
                ? "text-ink underline decoration-accent decoration-2 underline-offset-4"
                : "text-muted hover:text-ink"
            }`}
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  );
}
