import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCSS from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
        // ...custom presets
      ],

      shortcuts: [
        {
          "container-c": "container ma",
          link: "no-underline px-3 py-4 hover:opacity-90 font-500 text-sm text-[#6E6893]",
        },
      ],
      theme: {
        // ...
        colors: {
          brand: {
            blue: "#6D5BD0",
            green: "#007F00",
            red: "#D30000",
            slate: "#25213B",
            slate75: "#6E6893",
            slate50: "#8B83BA",
            slate25: "#C6C2DE",
            light: "#F2F0F9",
            smoke: "#F4F2FF",
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
