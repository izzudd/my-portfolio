import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md', '.svx', '.mdx'],
    })
  ],

  kit: {
    adapter: adapter(),
    alias: {
      '@component/*': 'src/components/*',
      '@store/*': 'src/stores/*',
      '@content/*': 'content/*'
    }
  },
};

export default config;
