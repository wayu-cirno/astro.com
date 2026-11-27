import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkBreaks from 'remark-breaks';

export default defineConfig({
  site: 'https://wayu.jp',
  integrations: [
    mdx({
      remarkPlugins: [remarkBreaks],
    }),
  ],
});
