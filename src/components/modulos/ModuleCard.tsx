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
  index,
}: {
  href: string;
  name: string;
  summary: string;
  status: "available" | "coming-soon";
  availableLabel: string;
  comingLabel: string;
  ctaLabel: string;
  index?: number;
}) {
  const number = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  return (
    <Link
      href={href}
      className="module-row group flex flex-col gap-3 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:flex-row sm:items-baseline sm:gap-8"
    >
      {number ? (
        <span className="kicker tabular-nums">{number}</span>
      ) : null}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-xl font-semibold text-ink group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-4">
            {name}
          </h3>
          <StatusBadge status={status} availableLabel={availableLabel} comingLabel={comingLabel} />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>
      </div>
      <span className="text-sm font-medium text-accent-2">{ctaLabel} →</span>
    </Link>
  );
}
