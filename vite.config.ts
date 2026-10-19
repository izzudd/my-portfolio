import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import content from '@originjs/vite-plugin-content';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      // SvelteKit 3: everything that used to live in `svelte.config.js` is now
      // a plugin option here.
      adapter: adapter(),
      preprocess: [
        vitePreprocess(),
        mdsvex({
          extensions: ['.md', '.svx', '.mdx'],
        }),
      ],
    }),
    content(),
  ],
  server: {
    fs: { allow: ['content'] },
  },
});
