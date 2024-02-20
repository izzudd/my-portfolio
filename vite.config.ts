import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import content from '@originjs/vite-plugin-content'

const config: UserConfig = {
  plugins: [sveltekit(), content()],
  server: {
    fs: { allow: ['content'] }
  }
};

export default config;
