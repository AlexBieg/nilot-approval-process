import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://alexbieg.github.io',
  base: '/nilot-approval-process',
  build: {
    assets: 'assets',
  },
});
