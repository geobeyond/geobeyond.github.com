// Central content + configuration for the Geobeyond website.
// Editing copy, nav items, services and products happens here.

export const site = {
  name: "Geobeyond",
  legalName: "Geobeyond Srl",
  tagline: "Enabling geography as a business key",
  description:
    "Geobeyond builds tailored open-source Spatial Data Infrastructures, geospatial APIs and secure digital identity systems that turn geographic information, Earth Observation and IoT data into business value.",
  url: "https://www.geobeyond.it",
  email: "info@geobeyond.it",
  // Founded 2011 — Vacone (RI), Italy
  foundedYear: 2011,
  location: "Vacone (RI), Italy",
  social: {
    github: "https://github.com/geobeyond",
    linkedin: "https://it.linkedin.com/company/geobeyond",
    x: "https://x.com/geobeyond",
    medium: "https://medium.com/geobeyond",
  },
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Open Source", href: "#open-source" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    id: "sdi",
    title: "Spatial Data Infrastructures & Geoportals",
    summary:
      "Open-source SDIs and geoportals that turn geographic information, Earth Observation and IoT data into an open, data-driven strategy.",
    points: [
      "GeoNode & GeoServer geoportals",
      "PostGIS spatial databases",
      "OGC-standard, discoverable & shareable data",
    ],
    icon: "globe",
  },
  {
    id: "api",
    title: "Geospatial APIs & Digital Transformation",
    summary:
      "Web-based APIs are the foundation of digital transformation — powering mobile apps and integrated digital ecosystems for modern organisations.",
    points: [
      "OGC API suite with pygeoapi",
      "FastAPI-based geospatial services",
      "Cloud-native & STAC catalogues",
    ],
    icon: "api",
  },
  {
    id: "iam",
    title: "Digital Identity & Security",
    summary:
      "Up-to-date, tamper-proof digital identity systems to deliver efficient, secure, standards-compliant digital products.",
    points: [
      "Identity & Access Management",
      "Single Sign-On (OpenID Connect)",
      "Policy-based authorization (OPA)",
    ],
    icon: "shield",
  },
];

export const products = [
  {
    name: "fastgeoapi",
    description:
      "A FastAPI application wrapping pygeoapi as a library, with authentication, authorization and security batteries included.",
    href: "https://github.com/geobeyond/fastgeoapi",
    lang: "Python",
  },
  {
    name: "pygeoapi",
    description:
      "Core contributors to pygeoapi — the Python server implementation of the OGC API suite of standards.",
    href: "https://pygeoapi.io",
    lang: "Python",
  },
  {
    name: "geoserverx",
    description:
      "A modern GeoServer REST API client and CLI for Python, influenced by HTTPX.",
    href: "https://github.com/geobeyond/geoserverx",
    lang: "Python",
  },
  {
    name: "fastflows",
    description:
      "A FastAPI server and command-line tool to drive Prefect as a workflow manager for geospatial pipelines.",
    href: "https://github.com/geobeyond/fastflows",
    lang: "Python",
  },
];

export const stack = [
  "pygeoapi",
  "GeoServer",
  "PostGIS",
  "GeoNode",
  "MapStore",
  "OpenLayers",
  "FastAPI",
  "STAC",
  "Prefect",
  "Open Policy Agent",
];

export const stats = [
  { value: "2011", label: "Founded" },
  { value: "OGC", label: "Standards-first" },
  { value: "100%", label: "Open source" },
  { value: "EU", label: "FOSS4G community" },
];
