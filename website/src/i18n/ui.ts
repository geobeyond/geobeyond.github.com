/* DRAFT — UI chrome strings (nav, footer, language switch) per locale. */
import type { Locale } from "./home";

export const locales: Locale[] = ["en", "it"];
export const defaultLocale: Locale = "en";

/** Path prefix for a locale ("" for the default, "/it" otherwise). */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** Same page in the other locale (draft: home only). */
export function altLocale(locale: Locale): Locale {
  return locale === "en" ? "it" : "en";
}

// `path` is the route WITHOUT the locale prefix; Base.astro prepends the base
// and locale prefix. Slugs are shared across locales for now (draft).
export const ui: Record<Locale, {
  langName: string;
  nav: { label: string; path: string }[];
  footerNote: string;
}> = {
  en: {
    langName: "EN",
    nav: [
      { label: "Services", path: "/services" },
      { label: "Open Source", path: "/open-source" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
    footerNote: "Open-source geospatial engineering since 2011 · Vacone (RI), Italy",
  },
  it: {
    langName: "IT",
    nav: [
      { label: "Servizi", path: "/services" },
      { label: "Open Source", path: "/open-source" },
      { label: "Chi siamo", path: "/about" },
      { label: "Contatti", path: "/contact" },
    ],
    footerNote: "Ingegneria geospaziale open source dal 2011 · Vacone (RI), Italia",
  },
};
