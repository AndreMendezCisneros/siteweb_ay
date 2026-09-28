import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function ModuleCard({
  href,
  name,
  summary,
  status,
  availableLabel,
  comingLabel,
  ctaLabel,
}: {
  href: string;
  name: string;
  summary: string;
  status: "available" | "coming-soon";
  availableLabel: string;
  comingLabel: string;
  ctaLabel: string;
}) {
  return (
    <Link
      href={href}
      className="module-card group flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-sm transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <StatusBadge status={status} availableLabel={availableLabel} comingLabel={comingLabel} />
      <h3 className="mt-3 font-[family-name:var(--font-syne)] text-xl font-semibold text-ink group-hover:text-primary">
        {name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{summary}</p>
      <span className="mt-5 text-sm font-semibold text-accent transition group-hover:translate-x-0.5">
        {ctaLabel} →
      </span>
    </Link>
  );
}
