import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Api-wiz-JSONtree/",
  plugins: [tailwindcss()],
});
