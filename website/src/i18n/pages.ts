/* ===========================================================================
 * Inner-page content (Services, Open Source, About, Contact) per locale.
 *
 * Sourced from the real Geobeyond portfolio: ASIG OGC API EoI reference notes
 * (Roma Capitale lifecycle), fastgeoapi README, ADR-015 on async-pygeoapi.
 * Shared facts (email, social) come from src/data/site.ts.
 *
 * NOTE: geocardo is Francesco Bartoli's personal project (personal GitHub),
 * NOT a Geobeyond product — intentionally not listed here. async-pygeoapi is
 * the Geobeyond-org async evolution of pygeoapi (per ADR-015).
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
    name: "pygeoapi",
    description:
      "Python server implementation of the OGC API suite. An OSGeo project — we contribute as core maintainers, design partners and downstream adopters across Roma Capitale's geospatial fabric.",
    href: "https://pygeoapi.io",
    lang: "Python · OSGeo",
  },
  {
    name: "GeoNode",
    description:
      "The geospatial CMS for spatial data infrastructures. Mature OSGeo project we maintain and deploy on production geoportals.",
    href: "https://geonode.org",
    lang: "Python · OSGeo",
  },
  {
    name: "fastgeoapi",
    description:
      "FastAPI wrapper for pygeoapi with security batteries included — Keycloak authentication, Open Policy Agent authorization, OGC API – Features/Tiles/Processes endpoints, production-ready.",
    href: "https://github.com/geobeyond/fastgeoapi",
    lang: "Python · FastAPI",
  },
  {
    name: "async-pygeoapi",
    description:
      "Fully-async evolution of pygeoapi with complete YAML configuration compatibility. Designed to leverage the native-async Python/Rust geospatial ecosystem (TiPG, Titiler, Obstore, asyncpg).",
    href: "https://github.com/geobeyond",
    lang: "Python · async",
  },
];

const stack = [
  "OGC API – Features", "OGC API – Tiles", "OGC API – Processes",
  "STAC", "Cloud Optimized GeoTIFF", "pygeoapi", "GeoNode", "MapStore",
  "PostGIS", "pgSTAC", "FastAPI", "Keycloak", "Open Policy Agent",
  "Kubernetes", "MinIO S3", "OpenAPI", "OAuth2 / OIDC", "SPID",
];

export const pages: Record<Locale, PagesContent> = {
  en: {
    services: {
      eyebrow: "What we do",
      heading: "Services",
      lead:
        "Four service tiers covering the full lifecycle of standards-compliant geospatial services — from cloud foundation to national-scale federation. Each tier is grounded in real reference projects for Italy's largest municipal administration.",
      items: [
        {
          title: "Foundation — Cloud, IAM & Architecture",
          summary:
            "We lay the bedrock under every geospatial service: cloud-native SDI, capacity planning, federated identity (SPID, OpenID Connect) and architectural advisory.",
          points: [
            "Cloud migration for production geospatial systems (Kubernetes, EcaaS)",
            "Federated IAM upgrade — SPID and institutional credentials",
            "Capacity planning, dependency mapping and migration validation",
            "System assessment and modernization roadmaps",
          ],
        },
        {
          title: "Operate & Build — Geospatial APIs",
          summary:
            "OGC API – Features, Tiles and Processes designed and built on pygeoapi and FastAPI. OpenAPI-described, machine-readable and secure by design.",
          points: [
            "OGC API – Features endpoints with OGC CQL filtering",
            "OpenAPI-specified REST contracts, Swagger-navigable",
            "Evolutive maintenance of production geoportals (GeoRoma, MPIC, Atlante)",
            "ETL pipelines from data lakes and cadastral systems",
          ],
        },
        {
          title: "Catalog & Discover — Cloud-Native Geospatial",
          summary:
            "SpatioTemporal Asset Catalogs, Cloud Optimized GeoTIFF and S3 object storage — Earth Observation and aerial imagery ready to search across space and time.",
          points: [
            "STAC catalogues on STAC FastAPI + pgSTAC (PostgreSQL/PostGIS)",
            "Cloud Optimized GeoTIFF pipelines with EXIF + SHA-256 integrity",
            "S3-compatible object storage (MinIO) with HTTP Range Requests",
            "OGC API – Tiles streaming (WMTS / TMS / XYZ)",
          ],
        },
        {
          title: "Federate — National Interoperability",
          summary:
            "We federate geographic data across public administrations. Italy's national PDND platform is our reference: OGC API – Features published as machine-readable E-Services, OAuth2 M2M, CAD-compliant.",
          points: [
            "E-Service onboarding on PDND (Piattaforma Digitale Nazionale Dati)",
            "OAuth2 / Client Credentials machine-to-machine federation",
            "INSPIRE / CAD / AgID compliance",
            "Long-term corrective and evolutive maintenance",
          ],
        },
      ],
    },
    openSource: {
      eyebrow: "Built in the open",
      heading: "Open Source",
      lead:
        "We don't just use open source — we build and maintain it. Geobeyond engineers are core maintainers of pygeoapi (OSGeo) and contributors to GeoNode, and ship downstream products that bring those projects into production.",
      items: products,
      stackHeading: "Standards and stack",
      stack,
    },
    about: {
      eyebrow: "Who we are",
      heading: "About Geobeyond",
      lead:
        "Standards-first, open by default. Engineering the lifecycle of geospatial services since 2011.",
      body: [
        "Geobeyond is a geospatial software company founded in 2011 and based in Italy. We design, build and operate standards-compliant geospatial services for public administrations and enterprises — covering the entire lifecycle from cloud foundation to national-scale data federation.",
        "We are technical owners of mission-critical geospatial systems for Roma Capitale — Italy's largest local administration — including GeoRoma, MPIC (Municipal Real Estate Management), Atlante (public geoportal), Aerofototeca (aerial imagery STAC catalog) and the PDND E-Services that federate Roma's data to other Italian public administrations.",
        "Open source is not a tactic — it's our backbone. We are core maintainers of pygeoapi (the OSGeo Python server for the OGC API suite) and active contributors to GeoNode. Our founder & CTO is an OSGeo Charter Member and a recurring speaker at FOSS4G — the international open-source geospatial conference.",
      ],
      stats: [
        { value: "2011", label: "Founded" },
        { value: "OSGeo", label: "Charter Member" },
        { value: "OGC", label: "Standards-first" },
        { value: "FOSS4G", label: "Speakers & maintainers" },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      heading: "Contact",
      lead:
        "Talk to us about your standards-compliant geospatial services — SDI, OGC APIs, STAC catalogs or PDND federation. We read every message.",
      emailLabel: "Email",
      email: site.email,
      social,
    },
  },
  it: {
    services: {
      eyebrow: "Cosa facciamo",
      heading: "Servizi",
      lead:
        "Quattro tier di servizio che coprono l'intero ciclo dei servizi geospaziali standards-compliant — dalle fondamenta cloud fino alla federazione su scala nazionale. Ogni tier è ancorato a progetti di riferimento reali per la più grande amministrazione comunale italiana.",
      items: [
        {
          title: "Fondamenta — Cloud, IAM & Architettura",
          summary:
            "Costruiamo le fondamenta sotto ogni servizio geospaziale: SDI cloud-native, capacity planning, identità federata (SPID, OpenID Connect) e advisory architetturale.",
          points: [
            "Cloud migration di sistemi geospaziali in produzione (Kubernetes, EcaaS)",
            "Upgrade IAM federato — SPID e credenziali istituzionali",
            "Capacity planning, dependency mapping e validazione della migrazione",
            "System assessment e roadmap di modernizzazione",
          ],
        },
        {
          title: "Operare e Costruire — API Geospaziali",
          summary:
            "OGC API – Features, Tiles e Processes progettate e costruite su pygeoapi e FastAPI. Descritte in OpenAPI, machine-readable, sicure by design.",
          points: [
            "Endpoint OGC API – Features con filtraggio OGC CQL",
            "Contratti REST formalizzati in OpenAPI, navigabili via Swagger",
            "Manutenzione evolutiva di geoportali in produzione (GeoRoma, MPIC, Atlante)",
            "Pipeline ETL da data lake e sistemi catastali",
          ],
        },
        {
          title: "Catalogare e Scoprire — Cloud-Native Geospatial",
          summary:
            "SpatioTemporal Asset Catalogs, Cloud Optimized GeoTIFF e object storage S3 — Earth Observation e fotogrammi aerei, ricercabili nello spazio e nel tempo.",
          points: [
            "Cataloghi STAC su STAC FastAPI + pgSTAC (PostgreSQL/PostGIS)",
            "Pipeline Cloud Optimized GeoTIFF con metadati EXIF e integrità SHA-256",
            "Object storage S3-compatibile (MinIO) con HTTP Range Requests",
            "Streaming OGC API – Tiles (WMTS / TMS / XYZ)",
          ],
        },
        {
          title: "Federare — Interoperabilità Nazionale",
          summary:
            "Federiamo dati geografici tra pubbliche amministrazioni. La PDND nazionale è il nostro riferimento: OGC API – Features pubblicate come E-Service machine-readable, OAuth2 M2M, conformi al CAD.",
          points: [
            "Onboarding E-Service sulla PDND (Piattaforma Digitale Nazionale Dati)",
            "Federazione OAuth2 / Client Credentials machine-to-machine",
            "Conformità INSPIRE / CAD / AgID",
            "Manutenzione correttiva ed evolutiva di lungo periodo",
          ],
        },
      ],
    },
    openSource: {
      eyebrow: "Costruito in modo aperto",
      heading: "Open Source",
      lead:
        "Non ci limitiamo a usare open source — lo costruiamo e lo manteniamo. Gli ingegneri Geobeyond sono core maintainer di pygeoapi (OSGeo) e contributor di GeoNode, e producono strumenti downstream che portano questi progetti in produzione.",
      items: products,
      stackHeading: "Standard e tecnologie",
      stack,
    },
    about: {
      eyebrow: "Chi siamo",
      heading: "Chi è Geobeyond",
      lead:
        "Standards-first, open by default. Progettiamo l'intero ciclo dei servizi geospaziali dal 2011.",
      body: [
        "Geobeyond è una società di software geospaziale fondata nel 2011, con sede in Italia. Progettiamo, costruiamo e operiamo servizi geospaziali conformi agli standard per pubbliche amministrazioni e imprese — coprendo l'intero ciclo, dalle fondamenta cloud fino alla federazione nazionale dei dati.",
        "Siamo technical owner di sistemi geospaziali mission-critical per Roma Capitale — la più grande amministrazione locale italiana — tra cui GeoRoma, MPIC (Municipal Real Estate Management), Atlante (geoportale pubblico), Aerofototeca (catalogo STAC dei fotogrammi aerei) e gli E-Service PDND che federano i dati di Roma alle altre pubbliche amministrazioni italiane.",
        "L'open source non è una tattica, è la nostra colonna vertebrale. Siamo core maintainer di pygeoapi (il server Python OSGeo per la suite OGC API) e contributor attivi di GeoNode. Il nostro Founder & CTO è OSGeo Charter Member e speaker ricorrente a FOSS4G, la conferenza internazionale del geospatial open source.",
      ],
      stats: [
        { value: "2011", label: "Fondata" },
        { value: "OSGeo", label: "Charter Member" },
        { value: "OGC", label: "Standards-first" },
        { value: "FOSS4G", label: "Speaker & maintainer" },
      ],
    },
    contact: {
      eyebrow: "Scrivici",
      heading: "Contatti",
      lead:
        "Parliamo dei tuoi servizi geospaziali standards-compliant — SDI, OGC API, cataloghi STAC o federazione PDND. Leggiamo ogni messaggio.",
      emailLabel: "Email",
      email: site.email,
      social,
    },
  },
};
