import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import compression from 'vite-plugin-compression';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  plugins: [
    solidPlugin(),
    compression({
      algorithm: 'gzip',
    }),
    ViteMinifyPlugin({}),
  ],
  css: {
    postcss: './postcss.config.cjs',
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        lite: 'lite.html',
        rich: 'rich.html',
      },
    },
  },
});
