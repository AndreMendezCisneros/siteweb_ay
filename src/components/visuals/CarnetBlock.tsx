import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function CarnetBlock({
  title,
  description,
  points,
  imageAlt,
}: {
  title: string;
  description: string;
  points: string[];
  imageAlt: string;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal className="mx-auto w-full max-w-[18rem]">
        <div className="overflow-hidden rounded-[1.25rem] border border-border bg-surface p-3 shadow-md">
          <Image
            src="/images/carnet_asisacademy.png"
            alt={imageAlt}
            width={480}
            height={760}
            className="h-auto w-full rounded-[0.9rem] object-contain"
          />
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-ink sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              {point}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
