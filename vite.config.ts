import react from "@vitejs/plugin-react";
// @ts-ignore
import path from "path";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  preview: {
    port: 8080,
  },
  build: {
    outDir: "build",
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
