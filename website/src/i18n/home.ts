/* ===========================================================================
 * DRAFT CONTENT — copy, chips and ordering are placeholders to be reviewed
 * and rethought carefully. The structure (sections + cube transitions) is the
 * stable part; the words are not final.
 *
 * One `.sec` per scroll step. The cube plays one solve-transition BETWEEN each
 * consecutive pair, so N sections ⇒ N-1 transitions. The cube currently has 4
 * built-in transition sequences (see cube-solve.ts), matching 5 sections.
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
        body: "The geospatial world is complex. Scroll — we solve it, one capability at a time.",
        hint: "↓ scroll to solve",
        badge: "complex → ordered",
      },
      {
        num: "01 — Infrastructure",
        titleHtml: 'Spatial Data <span class="hl">Infrastructures</span>',
        body: "Open-source SDIs and geoportals: GeoNode, GeoServer, PostGIS.",
        tags: ["GeoNode", "GeoServer", "PostGIS"],
        badge: "SDI · geoportals",
      },
      {
        num: "02 — Data & APIs",
        titleHtml: 'Geospatial <span class="hl">APIs</span>',
        body: "The OGC API suite with pygeoapi and FastAPI — cloud-native and STAC-ready.",
        tags: ["pygeoapi", "FastAPI", "STAC"],
        badge: "OGC API · GeoJSON",
      },
      {
        num: "03 — Identity",
        titleHtml: 'Digital <span class="hl">Identity</span>',
        body: "Single Sign-On, Identity & Access Management and policy-based authorization.",
        tags: ["OpenID Connect", "OPA"],
        badge: "SSO · IAM",
      },
      {
        num: "04 — Open Source",
        titleHtml: 'Built in the <span class="hl">open</span>',
        body: "fastgeoapi, geoserverx, fastflows — and core contributors to pygeoapi. The world, solved.",
        tags: ["fastgeoapi", "geoserverx", "fastflows"],
        badge: "solved · ordered world",
      },
    ],
  },
  it: {
    sections: [
      {
        hero: true,
        eyebrow: "Ingegneria geospaziale open source",
        titleHtml: 'Making<br><span class="b">Geospatial</span><br><span class="g">Happen</span>',
        body: "Il mondo geospaziale è complesso. Scorri: lo risolviamo, una capability alla volta.",
        hint: "↓ scorri per risolvere",
        badge: "complex → ordered",
      },
      {
        num: "01 — Infrastrutture",
        titleHtml: 'Spatial Data <span class="hl">Infrastructures</span>',
        body: "SDI e geoportali open source: GeoNode, GeoServer, PostGIS.",
        tags: ["GeoNode", "GeoServer", "PostGIS"],
        badge: "SDI · geoportals",
      },
      {
        num: "02 — Dati & API",
        titleHtml: 'Geospatial <span class="hl">APIs</span>',
        body: "La suite OGC API con pygeoapi e FastAPI, cloud-native e STAC.",
        tags: ["pygeoapi", "FastAPI", "STAC"],
        badge: "OGC API · GeoJSON",
      },
      {
        num: "03 — Identità",
        titleHtml: 'Digital <span class="hl">Identity</span>',
        body: "Single Sign-On, IAM e autorizzazione basata su policy.",
        tags: ["OpenID Connect", "OPA"],
        badge: "SSO · IAM",
      },
      {
        num: "04 — Open Source",
        titleHtml: 'Built in the <span class="hl">open</span>',
        body: "fastgeoapi, geoserverx, fastflows — e core dev di pygeoapi. Il mondo è risolto.",
        tags: ["fastgeoapi", "geoserverx", "fastflows"],
        badge: "solved · ordered world",
      },
    ],
  },
};
