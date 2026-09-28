import Link from "next/link";
import { CtaBand } from "@/components/home/CtaBand";
import { FaqList } from "@/components/home/FaqList";
import { Hero } from "@/components/home/Hero";
import { MessengerAppSection } from "@/components/home/MessengerAppSection";
import { MethodTimeline } from "@/components/home/MethodTimeline";
import { PersonalizationBlock } from "@/components/home/PersonalizationBlock";
import { ModuleCard } from "@/components/modulos/ModuleCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CarnetBlock } from "@/components/visuals/CarnetBlock";
import { ProductGallery } from "@/components/visuals/ProductGallery";
import { getAvailableModules, getComingModules } from "@/lib/modules";
import { getDict } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDict(locale);
  const { home, productVisuals, personalization } = dict;
  const available = getAvailableModules(dict);
  const coming = getComingModules(dict);

  return (
    <>
      <Hero locale={locale} dict={dict} />

      <Section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={home.institutionsEyebrow}
            title={home.institutionsTitle}
            description={home.institutionsDescription}
          />
          <Link href={`/${locale}/instituciones`} className="text-link text-sm">
            {dict.ui.knowMore} →
          </Link>
        </div>
        <ul className="mt-8 grid gap-0 border-y border-border md:grid-cols-2 md:divide-x md:divide-border">
          {dict.institutions.map((inst, index) => (
            <li key={inst.slug}>
              <Reveal delay={index * 80} className="flex h-full flex-col p-6">
                <p className="kicker">{inst.status}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{inst.name}</h3>
                <p className="mt-1 font-mono text-sm text-muted">{inst.location}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{inst.description}</p>
                <a
                  href={inst.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link mt-5 inline-block text-sm"
                >
                  {dict.ui.enter} →
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section band>
        <SectionHeading
          eyebrow={home.problemEyebrow}
          title={home.problemTitle}
          description={home.problemDescription}
        />
        <div className="mt-8 grid gap-0 border-2 border-ink lg:grid-cols-2">
          <Reveal className="border-b-2 border-ink bg-background p-6 lg:border-b-0 lg:border-r-2">
            <h3 className="font-display text-xl font-semibold text-ink">{home.withoutTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {home.withoutItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-error" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="bg-surface p-6">
            <h3 className="font-display text-xl font-semibold text-ink">{home.withTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {home.withItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-accent-2" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link href={`/${locale}/plataforma`} className="text-link mt-6 inline-block text-sm">
              {dict.cta.secondary} →
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section id="modulos">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={home.modulesEyebrow}
            title={home.modulesTitle}
            description={home.modulesDescription}
          />
          <Link href={`/${locale}/modulos`} className="text-link text-sm">
            {dict.cta.seeModules} →
          </Link>
        </div>
        <div className="mt-4 border-t border-border">
          {available.map((mod, index) => (
            <Reveal key={mod.slug} delay={index * 40}>
              <ModuleCard
                href={`/${locale}/modulos/${mod.slug}`}
                name={mod.name}
                summary={mod.summary}
                status={mod.status}
                availableLabel={dict.ui.available}
                comingLabel={dict.ui.comingSoon}
                ctaLabel={dict.ui.seeModule}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <MessengerAppSection locale={locale} dict={dict} />

      <Section band>
        <SectionHeading
          eyebrow={productVisuals.galleryEyebrow}
          title={productVisuals.galleryTitle}
          description={productVisuals.galleryDescription}
        />
        <div className="mt-8">
          <ProductGallery
            labels={productVisuals.screens}
            caption={productVisuals.galleryCaption}
          />
        </div>
      </Section>

      <Section>
        <PersonalizationBlock {...personalization} />
        <div className="mt-14">
          <CarnetBlock
            title={productVisuals.carnetTitle}
            description={productVisuals.carnetDescription}
            points={productVisuals.carnetPoints}
            imageAlt={productVisuals.carnetAlt}
          />
        </div>
      </Section>

      <Section band>
        <SectionHeading
          eyebrow={home.methodEyebrow}
          title={home.methodTitle}
          description={home.methodDescription}
        />
        <MethodTimeline steps={dict.methodology} />
        <Link href={`/${locale}/como-funciona`} className="text-link mt-8 inline-block text-sm">
          {dict.cta.howItWorks} →
        </Link>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={home.audiencesEyebrow}
          title={home.audiencesTitle}
          description={home.audiencesDescription}
        />
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {dict.audiences.map((aud, index) => (
            <li key={aud.slug}>
              <Reveal delay={index * 60} className="grid gap-3 py-6 sm:grid-cols-[6rem_1fr]">
                <p className="font-mono text-sm text-accent-2">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{aud.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{aud.summary}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section band>
        <SectionHeading
          eyebrow={home.roadmapEyebrow}
          title={home.roadmapTitle}
          description={home.roadmapDescription}
        />
        <div className="mt-4 border-t border-border">
          {coming.map((mod, index) => (
            <Reveal key={mod.slug} delay={index * 40}>
              <ModuleCard
                href={`/${locale}/modulos/${mod.slug}`}
                name={mod.name}
                summary={mod.summary}
                status={mod.status}
                availableLabel={dict.ui.available}
                comingLabel={dict.ui.comingSoon}
                ctaLabel={dict.ui.seeModule}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={home.plansEyebrow}
            title={home.plansTitle}
            description={home.plansDescription}
          />
          <Link href={`/${locale}/planes`} className="text-link text-sm">
            {dict.cta.seePlans} →
          </Link>
        </div>
        <div className="mt-8 grid gap-0 border-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
          {dict.plans.map((plan, index) => (
            <Reveal
              key={plan.slug}
              delay={index * 60}
              className="flex h-full flex-col border-ink p-6 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <p className="font-mono text-sm text-accent-2">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.summary}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
                {plan.features.map((f) => (
                  <li key={f}>— {f}</li>
                ))}
              </ul>
              <Link href={`/${locale}/contacto`} className="text-link mt-5 text-sm">
                {dict.cta.primary} →
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section band>
        <SectionHeading eyebrow={home.faqEyebrow} title={home.faqTitle} />
        <FaqList items={dict.faq} />
      </Section>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
