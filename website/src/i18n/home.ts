/* ===========================================================================
 * Homepage content — EN + IT.
 *
 * The narrative arc is the Foundation → Operate → Catalog → Federate lifecycle
 * (the full lifecycle of standards-compliant geospatial services), distilled
 * from real Geobeyond reference projects (Roma Capitale: MPIC/Atlante,
 * Aerofototeca, PDND, GeoRoma TVA/Siscat, Mediageo cloud migration).
 *
 * One `.sec` per scroll step. The cube plays one solve-transition BETWEEN each
 * consecutive pair, so N sections ⇒ N-1 transitions. The cube has 4 built-in
 * transition sequences (see cube-solve.ts), matching 5 sections.
 * ========================================================================= */

export type Section = {
  hero?: boolean;
  eyebrow?: string;
  num?: string;
  /** May contain inline <span class="hl|b|g"> for brand-coloured words. */
  titleHtml: string;
  body: string;
  tags?: string[];
  /** Monospace label shown under the cube for this step. */
  badge: string;
  hint?: string;
};

export type Locale = "en" | "it";

export const home: Record<Locale, { sections: Section[] }> = {
  en: {
    sections: [
      {
        hero: true,
        eyebrow: "Open-source geospatial engineering",
        titleHtml: 'Making<br><span class="b">Geospatial</span><br><span class="g">Happen</span>',
        body: "Standards-compliant geospatial services — designed, built, operated and federated. Scroll: we walk the full lifecycle, one capability at a time.",
        hint: "↓ scroll to solve",
        badge: "complex → ordered",
      },
      {
        num: "01 — Foundation",
        titleHtml: 'Spatial Data <span class="hl">Infrastructures</span>',
        body: "Cloud-native SDI, capacity planning, federated identity (SPID, OpenID Connect) and architectural advisory — the bedrock under every geospatial service.",
        tags: ["Kubernetes", "PostGIS", "IAM", "SPID"],
        badge: "SDI · IAM · cloud",
      },
      {
        num: "02 — Operate & Build",
        titleHtml: 'Geospatial <span class="hl">APIs</span>',
        body: "OGC API – Features, Tiles and Processes built on pygeoapi and FastAPI. OpenAPI-described, machine-readable, secure by design.",
        tags: ["OGC API", "pygeoapi", "FastAPI", "OpenAPI"],
        badge: "OGC API · GeoJSON",
      },
      {
        num: "03 — Catalog & Discover",
        titleHtml: 'Cloud-native <span class="hl">catalogs</span>',
        body: "SpatioTemporal Asset Catalogs (STAC), Cloud Optimized GeoTIFF and S3 object storage — Earth Observation and aerial imagery, ready to search across space and time.",
        tags: ["STAC", "COG", "pgSTAC", "MinIO S3"],
        badge: "STAC · COG · search",
      },
      {
        num: "04 — Federate",
        titleHtml: 'Federation &amp; <span class="hl">open source</span>',
        body: "Federated E-Services on Italy's national PDND platform, OAuth2 machine-to-machine, and the open-source stack we maintain — pygeoapi, GeoNode, fastgeoapi.",
        tags: ["PDND", "OAuth2 M2M", "pygeoapi", "GeoNode"],
        badge: "PDND · federated · open",
      },
    ],
  },
  it: {
    sections: [
      {
        hero: true,
        eyebrow: "Ingegneria geospaziale open source",
        titleHtml: 'Making<br><span class="b">Geospatial</span><br><span class="g">Happen</span>',
        body: "Servizi geospaziali conformi agli standard — progettati, costruiti, operati e federati. Scorri: percorriamo l'intero ciclo, una capability alla volta.",
        hint: "↓ scorri per risolvere",
        badge: "complex → ordered",
      },
      {
        num: "01 — Fondamenta",
        titleHtml: 'Spatial Data <span class="hl">Infrastructures</span>',
        body: "SDI cloud-native, capacity planning, identità federata (SPID, OpenID Connect) e advisory architetturale — le fondamenta sotto a ogni servizio geospaziale.",
        tags: ["Kubernetes", "PostGIS", "IAM", "SPID"],
        badge: "SDI · IAM · cloud",
      },
      {
        num: "02 — Operare e costruire",
        titleHtml: 'Geospatial <span class="hl">APIs</span>',
        body: "OGC API – Features, Tiles e Processes su pygeoapi e FastAPI. Descritte in OpenAPI, machine-readable, sicure by design.",
        tags: ["OGC API", "pygeoapi", "FastAPI", "OpenAPI"],
        badge: "OGC API · GeoJSON",
      },
      {
        num: "03 — Catalogare e scoprire",
        titleHtml: 'Cataloghi <span class="hl">cloud-native</span>',
        body: "SpatioTemporal Asset Catalogs (STAC), Cloud Optimized GeoTIFF e object storage S3 — Earth Observation e fotogrammi aerei, ricercabili nello spazio e nel tempo.",
        tags: ["STAC", "COG", "pgSTAC", "MinIO S3"],
        badge: "STAC · COG · search",
      },
      {
        num: "04 — Federare",
        titleHtml: 'Federazione e <span class="hl">open source</span>',
        body: "E-Services federati sulla PDND nazionale, OAuth2 machine-to-machine e lo stack open source che manteniamo — pygeoapi, GeoNode, fastgeoapi.",
        tags: ["PDND", "OAuth2 M2M", "pygeoapi", "GeoNode"],
        badge: "PDND · federated · open",
      },
    ],
  },
};
