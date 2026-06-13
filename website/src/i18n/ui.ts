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

export const ui: Record<Locale, {
  langName: string;
  nav: { label: string; href: string }[];
  footerNote: string;
}> = {
  en: {
    langName: "EN",
    nav: [
      { label: "Services", href: "#services" },
      { label: "Open Source", href: "#open-source" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    footerNote: "Open-source geospatial engineering since 2011 · Vacone (RI), Italy",
  },
  it: {
    langName: "IT",
    nav: [
      { label: "Servizi", href: "#services" },
      { label: "Open Source", href: "#open-source" },
      { label: "Chi siamo", href: "#about" },
      { label: "Contatti", href: "#contact" },
    ],
    footerNote: "Ingegneria geospaziale open source dal 2011 · Vacone (RI), Italia",
  },
};
