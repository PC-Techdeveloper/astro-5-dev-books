// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';

import netlify from '@astrojs/netlify';

import vercel from '@astrojs/vercel';

// https://astro.build/config
// server islands
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  /* trabajando con variables de entorno */
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public'}),
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public'})
    }
  },

  adapter: vercel()
});