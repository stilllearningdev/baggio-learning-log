// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://baggio-learning-log.vercel.app',
	integrations: [mdx(), sitemap()],
	image: {
		domains: ['picsum.photos'],
	},
});
