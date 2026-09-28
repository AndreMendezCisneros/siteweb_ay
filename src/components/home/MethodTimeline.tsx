import { Reveal } from "@/components/ui/Reveal";

export function MethodTimeline({
  steps,
}: {
  steps: readonly { step: string; title: string; description: string }[];
}) {
  return (
    <ol className="mt-10 grid gap-0 border-2 border-ink md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {steps.map((step, index) => (
        <li
          key={step.step}
          className="border-ink md:border-r md:last:border-r-0 md:even:border-r-0 lg:even:border-r xl:[&:nth-child(3n)]:border-r xl:[&:nth-child(6n)]:border-r-0"
        >
          <Reveal
            delay={index * 50}
            className="flex h-full flex-col border-b-2 border-ink p-5 last:border-b-0 md:border-b-2 xl:border-b-0"
          >
            <p className="font-mono text-3xl font-medium text-ink">{step.step}</p>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
