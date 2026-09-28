import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { getDict, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(locale);
  const { site } = dict;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${site.tagline}`,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    icons: {
      icon: [
        { url: "/favicon.ico?v=3", sizes: "any" },
        { url: "/favicon-32.png?v=3", type: "image/png", sizes: "32x32" },
        { url: "/favicon.png?v=3", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180" }],
      shortcut: "/favicon.ico?v=3",
    },
    openGraph: {
      type: "website",
      locale: site.ogLocale,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
      images: [
        {
          url: "/images/og-asisacademy-1200.png",
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
      images: ["/images/og-asisacademy-1200.png"],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: dict.site.name,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: dict.site.url,
    description: dict.site.definition,
    brand: { "@type": "Brand", name: dict.site.parentBrand },
    offers: {
      "@type": "Offer",
      description: dict.cta.pilot,
    },
  };

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${ibmPlexSans.variable} ${fraunces.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[2px] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          {dict.ui.skipToContent}
        </a>
        <AnnouncementBar
          text={dict.announcement.text}
          cta={dict.announcement.cta}
          href={`/${locale}/contacto`}
        />
        <Header
          locale={locale}
          nav={dict.nav}
          ctaLabel={dict.cta.primary}
          openMenuLabel={dict.ui.openMenu}
          closeMenuLabel={dict.ui.closeMenu}
        />
        <main id="contenido-principal" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <WhatsAppFloat
          digits={dict.site.whatsappDigits}
          label={dict.whatsappFloat.label}
          message={dict.whatsappFloat.message}
        />
      </body>
    </html>
  );
}
