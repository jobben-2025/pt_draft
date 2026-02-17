export const siteConfig = {
  // Basis
  name: "PureTech Water",
  domain: "https://ptwater.de",
  language: "de",
  locale: "de_DE",

  // Unternehmen
  owner: {
    name: "PureTech Water GmbH",
    role: "Innovative Wasserfiltersysteme",
    location: "Berlin",
    email: "info@ptwater.de",
    phone: "030 / 23592931",
  },

  // Branding
  branding: {
    tagline: "Innovative Wasserfiltersysteme für höchste Ansprüche — Innovation, Qualität und Nachhaltigkeit",
    logo: {
      type: "text" as const,
      value: "PureTech Water",
      accentChar: "W",
    },
    colors: {
      accent: "#0E6BA8",
      accentDark: "#0A4F7D",
    },
  },

  // Navigation
  navigation: [
    { name: "Start", href: "/" },
    { name: "Über uns", href: "/ueber-uns/" },
    { name: "Leistungen", href: "/leistungen/" },
    { name: "Kontakt", href: "/kontakt/", isCTA: true },
  ],

  // Footer
  footer: {
    description: "Von der Entwicklung bis zur Produktion — PureTech Water GmbH liefert innovative Wasserfiltersysteme für Privathaushalte, Industrie und B2B-Partner.",
    links: [
      { name: "Start", href: "/" },
      { name: "Über uns", href: "/ueber-uns/" },
      { name: "Leistungen", href: "/leistungen/" },
      { name: "Kontakt", href: "/kontakt/" },
    ],
    legal: [
      { name: "Impressum", href: "/impressum/" },
      { name: "Datenschutz", href: "/datenschutz/" },
    ],
  },

  // Social Links
  social: [] as { platform: string; url: string; label: string }[],

  // Cross-Links (nicht relevant für PureTech Water)
  crossLinks: {
    arztbesuche: {
      url: "",
      text: "",
    },
    profilUrl: "",
  },

  // SEO Defaults
  seo: {
    defaultDescription: "PureTech Water GmbH — Innovative Wasserfiltersysteme für höchste Ansprüche. Direktvertrieb, technologische Entwicklung und B2B-Beratung aus Berlin.",
    defaultOgImage: "/images/og-default.webp",
    author: "PureTech Water GmbH",
    themeColor: "#0E6BA8",
  },

  // OG Image Generator
  og: {
    portrait: "", // Kein Portrait — Firmen-Website
  },

  // Features
  features: {
    blog: false,
    schwerpunkte: true, // Verwendet für Leistungen-Section
  },
};
