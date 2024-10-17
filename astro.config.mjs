import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    build: {
      minify: false,
      /* Change this to match YOUR portfolio */
      base: "https://thinkle-iacs.github.io/apcsp-portfolio-demo/",
    },
  },
});
