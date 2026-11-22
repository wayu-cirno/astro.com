import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkBreaks from 'remark-breaks';

export default defineConfig({
  site: 'https://wayutyan.com',
  integrations: [
    mdx({
      remarkPlugins: [remarkBreaks],
    }),
  ],
});
