import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary-soft/50">
      <div
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-10 sm:py-12 lg:py-14">
        {eyebrow ? (
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary-hover">
            <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden />
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
