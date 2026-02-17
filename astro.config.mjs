import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = !!process.env.GITHUB_ACTIONS;

export default defineConfig({
  site: process.env.SITE_URL || 'https://ptwater.de',
  base: isGitHubPages ? `/${process.env.REPO_NAME || 'pt_draft'}` : undefined,
  trailingSlash: 'always',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
