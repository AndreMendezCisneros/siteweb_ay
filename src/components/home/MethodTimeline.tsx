import { Reveal } from "@/components/ui/Reveal";

export function MethodTimeline({
  steps,
}: {
  steps: readonly { step: string; title: string; description: string }[];
}) {
  return (
    <ol className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {steps.map((step, index) => (
        <li key={step.step} className="bg-surface">
          <Reveal delay={index * 50} className="flex h-full flex-col p-5">
            <p className="kicker">{step.step}</p>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
