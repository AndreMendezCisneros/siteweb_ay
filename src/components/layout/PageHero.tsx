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
    <section className="border-b-2 border-ink bg-background">
      <Container className="py-10 sm:py-12 lg:py-14">
        {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
