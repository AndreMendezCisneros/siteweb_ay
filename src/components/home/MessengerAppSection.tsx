import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { Dict } from "@/lib/i18n";

export function MessengerAppSection({
  locale,
  dict,
  showDownload = true,
  showModuleLink = true,
}: {
  locale: string;
  dict: Dict;
  showDownload?: boolean;
  showModuleLink?: boolean;
}) {
  const app = dict.messengerApp;

  return (
    <Section band>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading title={app.galleryTitle} description={app.galleryDescription} />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {showDownload ? (
            <Button href={app.href} className="min-w-[12rem]">
              {app.button}
            </Button>
          ) : null}
          {showModuleLink ? (
            <Link href={`/${locale}/modulos/mensajeria`} className="text-link text-sm">
              {dict.ui.seeModule} →
            </Link>
          ) : null}
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {app.screens.map((screen, index) => (
          <Reveal key={screen.src} delay={index * 70}>
            <figure className="mx-auto w-full max-w-[16rem]">
              <div className="overflow-hidden rounded-[1.4rem] border border-border bg-ink p-2 shadow-md">
                <div className="overflow-hidden rounded-[1.1rem] bg-surface">
                  <Image
                    src={screen.src}
                    alt={screen.label}
                    width={390}
                    height={844}
                    className="h-auto w-full object-cover object-top"
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-center text-sm font-semibold text-ink">
                {screen.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      {showDownload ? (
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted">{app.note}</p>
      ) : null}
    </Section>
  );
}
