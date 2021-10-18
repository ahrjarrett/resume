import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";
import checkTypes from "vite-plugin-checker";

export default defineConfig({
  build: { outDir: "build" },
  envPrefix: "AHRJARRETT_CV_",
  /**
   * uncomment these lines to open your browser automatically when running `yarn dev`
   */
  server: {
    open: "/index.html",
  },
  plugins: [
    tsconfigPaths({
      root: "../..",
      // projects: ['../../packages'],
    }),
    reactRefresh(),
    checkTypes({ typescript: true }),
  ],
});
