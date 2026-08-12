import type { MetadataRoute } from "next";
import { es } from "@/content/es";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/plataforma",
    "/modulos",
    "/como-funciona",
    "/instituciones",
    "/planes",
    "/nosotros",
    "/contacto",
    "/legal/privacidad",
    "/legal/terminos",
    "/legal/cookies",
    "/legal/reclamaciones",
  ];
  const moduleRoutes = es.modules.map((m) => `/modulos/${m.slug}`);
  const now = new Date();
  const paths = [...staticRoutes, ...moduleRoutes];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${es.site.url}/${locale}${path}`,
      lastModified: now,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [alt, `${es.site.url}/${alt}${path}`]),
        ),
      },
    })),
  );
}
