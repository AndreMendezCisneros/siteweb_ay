import { Reveal } from "@/components/ui/Reveal";

type Example = {
  name: string;
  vibe: string;
  accent: string;
};

export function PersonalizationBlock({
  eyebrow,
  title,
  description,
  features,
  examplesTitle,
  examples,
  note,
}: {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  examplesTitle: string;
  examples: Example[];
  note: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-hover">{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{description}</p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {features.map((feature, index) => (
          <li key={feature}>
            <Reveal
              delay={index * 60}
              className="h-full rounded-[var(--radius-lg)] border border-border bg-surface p-5"
            >
              <p className="text-sm leading-relaxed text-muted">{feature}</p>
            </Reveal>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 font-[family-name:var(--font-syne)] text-xl font-semibold text-ink">
        {examplesTitle}
      </h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {examples.map((ex, index) => (
          <Reveal
            key={ex.name}
            delay={index * 70}
            className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface"
          >
            <div className="h-2 w-full" style={{ background: ex.accent }} aria-hidden />
            <div className="p-5">
              <p className="font-[family-name:var(--font-syne)] font-semibold text-ink">{ex.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{ex.vibe}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-muted">{note}</p>
    </div>
  );
}
