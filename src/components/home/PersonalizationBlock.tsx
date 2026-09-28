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
      <p className="kicker">{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{description}</p>

      <ul className="mt-8 divide-y divide-border border-y border-border">
        {features.map((feature, index) => (
          <li key={feature}>
            <Reveal delay={index * 60} className="grid gap-3 py-5 sm:grid-cols-[4rem_1fr]">
              <span className="kicker">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-sm leading-relaxed text-muted">{feature}</p>
            </Reveal>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 font-display text-xl font-semibold text-ink">{examplesTitle}</h3>
      <div className="mt-5 grid gap-px border border-border bg-border md:grid-cols-3">
        {examples.map((ex, index) => (
          <Reveal
            key={ex.name}
            delay={index * 70}
            className="border-border bg-surface md:border-r-0"
          >
            <div className="h-2 w-full" style={{ background: ex.accent }} aria-hidden />
            <div className="p-5">
              <p className="font-display font-semibold text-ink">{ex.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{ex.vibe}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-muted">{note}</p>
    </div>
  );
}
