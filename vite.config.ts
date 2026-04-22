import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import content from '@originjs/vite-plugin-content';
import tailwindcss from '@tailwindcss/vite';

const config: UserConfig = {
  plugins: [tailwindcss(), sveltekit(), content()],
  server: {
    fs: { allow: ['content'] },
  },
};

export default config;
