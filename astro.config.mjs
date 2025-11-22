// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true
    },
    preview: {
      host: '0.0.0.0',
      port: 3100,
      allowedHosts: ['fernandoyz.com', 'www.fernandoyz.com', 'localhost']
    }
  }
});
