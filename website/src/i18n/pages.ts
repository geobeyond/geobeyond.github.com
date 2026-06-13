/* ===========================================================================
 * DRAFT CONTENT — inner-page copy (Services, Open Source, About, Contact) per
 * locale. Placeholders to be reviewed and rewritten; structure is the stable
 * part. Shared facts (email, social) come from src/data/site.ts.
 * ========================================================================= */
import type { Locale } from "./home";
import { site } from "../data/site";

export type ServiceItem = { title: string; summary: string; points: string[] };
export type Product = { name: string; description: string; href: string; lang: string };
export type Social = { label: string; href: string };

export type PagesContent = {
  services: { eyebrow: string; heading: string; lead: string; items: ServiceItem[] };
  openSource: {
    eyebrow: string;
    heading: string;
    lead: string;
    items: Product[];
    stackHeading: string;
    stack: string[];
  };
  about: {
    eyebrow: string;
    heading: string;
    lead: string;
    body: string[];
    stats: { value: string; label: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    lead: string;
    emailLabel: string;
    email: string;
    social: Social[];
  };
};

const social: Social[] = [
  { label: "GitHub", href: site.social.github },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "X", href: site.social.x },
  { label: "Medium", href: site.social.medium },
];

const products: Product[] = [
  {
    name: "fastgeoapi",
    description:
      "A FastAPI application wrapping pygeoapi as a library, with authentication, authorization and security batteries included.",
    href: "https://github.com/geobeyond/fastgeoapi",
    lang: "Python",
  },
  {
    name: "pygeoapi",
    description: "Core contributors to pygeoapi — the Python server implementation of the OGC API suite.",
    href: "https://pygeoapi.io",
    lang: "Python",
  },
  {
    name: "geoserverx",
    description: "A modern GeoServer REST API client and CLI for Python, influenced by HTTPX.",
    href: "https://github.com/geobeyond/geoserverx",
    lang: "Python",
  },
  {
    name: "fastflows",
    description: "A FastAPI server and CLI to drive Prefect as a workflow manager for geospatial pipelines.",
    href: "https://github.com/geobeyond/fastflows",
    lang: "Python",
  },
];

const stack = [
  "pygeoapi", "GeoServer", "PostGIS", "GeoNode", "MapStore",
  "OpenLayers", "FastAPI", "STAC", "Prefect", "Open Policy Agent",
];

export const pages: Record<Locale, PagesContent> = {
  en: {
    services: {
      eyebrow: "What we do",
      heading: "Services",
      lead: "We engineer open-source geospatial systems end to end — from spatial data infrastructures to APIs and secure digital identity.",
      items: [
        {
          title: "Spatial Data Infrastructures & Geoportals",
          summary:
            "Open-source SDIs and geoportals that turn geographic information, Earth Observation and IoT data into an open, data-driven strategy.",
          points: ["GeoNode & GeoServer geoportals", "PostGIS spatial databases", "OGC-standard, discoverable & shareable data"],
        },
        {
          title: "Geospatial APIs & Digital Transformation",
          summary:
            "Web APIs are the foundation of digital transformation — powering mobile apps and integrated digital ecosystems.",
          points: ["OGC API suite with pygeoapi", "FastAPI-based geospatial services", "Cloud-native & STAC catalogues"],
        },
        {
          title: "Digital Identity & Security",
          summary:
            "Up-to-date, tamper-proof digital identity systems for efficient, secure, standards-compliant products.",
          points: ["Identity & Access Management", "Single Sign-On (OpenID Connect)", "Policy-based authorization (OPA)"],
        },
      ],
    },
    openSource: {
      eyebrow: "Built in the open",
      heading: "Open Source",
      lead: "We build, maintain and contribute to the open-source geospatial stack. Our work ships as reusable tools, not black boxes.",
      items: products,
      stackHeading: "Stack we work with",
      stack,
    },
    about: {
      eyebrow: "Who we are",
      heading: "About Geobeyond",
      lead: "Enabling geography as a business key since 2011.",
      body: [
        "Geobeyond builds tailored open-source Spatial Data Infrastructures, geospatial APIs and secure digital identity systems that turn geographic information, Earth Observation and IoT data into business value.",
        "We are standards-first and open by default — active members of the FOSS4G community and core contributors to projects like pygeoapi.",
      ],
      stats: [
        { value: "2011", label: "Founded" },
        { value: "OGC", label: "Standards-first" },
        { value: "100%", label: "Open source" },
        { value: "EU", label: "FOSS4G community" },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      heading: "Contact",
      lead: "Tell us about your geospatial challenge — we reply to every message.",
      emailLabel: "Email",
      email: site.email,
      social,
    },
  },
  it: {
    services: {
      eyebrow: "Cosa facciamo",
      heading: "Servizi",
      lead: "Progettiamo sistemi geospaziali open source end-to-end — dalle infrastrutture di dati spaziali alle API, fino all'identità digitale sicura.",
      items: [
        {
          title: "Spatial Data Infrastructures & Geoportali",
          summary:
            "SDI e geoportali open source che trasformano informazione geografica, Earth Observation e dati IoT in una strategia aperta e data-driven.",
          points: ["Geoportali GeoNode & GeoServer", "Database spaziali PostGIS", "Dati standard OGC, scopribili e condivisibili"],
        },
        {
          title: "API Geospaziali & Trasformazione Digitale",
          summary:
            "Le API web sono la base della trasformazione digitale — alimentano app mobili ed ecosistemi digitali integrati.",
          points: ["Suite OGC API con pygeoapi", "Servizi geospaziali su FastAPI", "Cataloghi cloud-native & STAC"],
        },
        {
          title: "Identità Digitale & Sicurezza",
          summary:
            "Sistemi di identità digitale aggiornati e a prova di manomissione per prodotti efficienti, sicuri e conformi agli standard.",
          points: ["Identity & Access Management", "Single Sign-On (OpenID Connect)", "Autorizzazione basata su policy (OPA)"],
        },
      ],
    },
    openSource: {
      eyebrow: "Costruito in modo aperto",
      heading: "Open Source",
      lead: "Costruiamo, manteniamo e contribuiamo allo stack geospaziale open source. Il nostro lavoro è fatto di strumenti riutilizzabili, non di scatole nere.",
      items: products,
      stackHeading: "Tecnologie che usiamo",
      stack,
    },
    about: {
      eyebrow: "Chi siamo",
      heading: "Chi è Geobeyond",
      lead: "Abilitiamo la geografia come chiave di business dal 2011.",
      body: [
        "Geobeyond realizza Spatial Data Infrastructures open source su misura, API geospaziali e sistemi di identità digitale sicuri che trasformano informazione geografica, Earth Observation e dati IoT in valore di business.",
        "Siamo standards-first e open by default — membri attivi della community FOSS4G e core contributor di progetti come pygeoapi.",
      ],
      stats: [
        { value: "2011", label: "Fondata" },
        { value: "OGC", label: "Standards-first" },
        { value: "100%", label: "Open source" },
        { value: "EU", label: "Community FOSS4G" },
      ],
    },
    contact: {
      eyebrow: "Scrivici",
      heading: "Contatti",
      lead: "Raccontaci la tua sfida geospaziale — rispondiamo a ogni messaggio.",
      emailLabel: "Email",
      email: site.email,
      social,
    },
  },
};
