import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
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
        "@interfaces": path.resolve(__dirname, "./src/interfaces"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@constants": path.resolve(__dirname, "./src/constants"),
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
      createHtmlPlugin({
        minify: true,
        inject: {
          data: env,
        },
      }),
    ],
  };
});
