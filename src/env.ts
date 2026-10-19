import { defineEnvVars } from '@sveltejs/kit/env';

// SvelteKit 3 explicit env vars. Both are `static` so they are resolved at
// build time and inlined into the prerendered static output; the schema
// functions return `undefined` when unset, which marks them optional.
export const variables = defineEnvVars({
  PUBLIC_UMAMI_ID: {
    public: true,
    static: true,
    description: 'Umami website id for the analytics script',
    schema: (value: string | undefined) => value,
  },
  PUBLIC_UMAMI_SOURCE: {
    public: true,
    static: true,
    description: 'URL of the Umami script to load',
    schema: (value: string | undefined) => value,
  },
});
