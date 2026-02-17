import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "../../site.config";
import { generateOgImage } from "../../lib/og-image";

interface OgPage {
  slug: string;
  title: string;
  description: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages: OgPage[] = [
    {
      slug: "index",
      title: "PureTech Water",
      description: "Innovative Wasserfiltersysteme für höchste Ansprüche",
    },
    {
      slug: "ueber-uns",
      title: "Über uns",
      description: "PureTech Water GmbH — Innovation, Qualität, Nachhaltigkeit",
    },
    {
      slug: "kontakt",
      title: "Kontakt",
      description: "PureTech Water GmbH — Wasserfiltersysteme aus Berlin",
    },
    {
      slug: "leistungen",
      title: "Leistungen",
      description: "Direktvertrieb, Technologische Entwicklung, B2B-Beratung",
    },
    {
      slug: "impressum",
      title: "Impressum",
      description: siteConfig.domain.replace("https://", ""),
    },
    {
      slug: "datenschutz",
      title: "Datenschutz",
      description: siteConfig.domain.replace("https://", ""),
    },
  ];

  // Leistungen aus Content Collection
  if (siteConfig.features.schwerpunkte) {
    const leistungen = await getCollection("leistungen");
    for (const entry of leistungen) {
      pages.push({
        slug: `leistungen/${entry.slug}`,
        title: entry.data.title,
        description: entry.data.description,
      });
    }
  }

  return pages.map((page) => ({
    params: { slug: page.slug },
    props: { title: page.title, description: page.description },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description } = props as { title: string; description: string };

  const png = await generateOgImage({ title, description });

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
