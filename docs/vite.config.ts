import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import { NotFound } from "./.vitepress/plugins/not-found";
import { DocFooter } from "./.vitepress/plugins/doc-footer";
import { DocAside } from "./.vitepress/plugins/doc-aside";

export default defineConfig(async () => {
  return {
    server: {
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      NotFound(),
      DocFooter(),
      DocAside(),

      // plugins
      Components({
        dirs: "./.vitepress/components",
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: "./.vitepress/components.d.ts",
        transformer: "vue3",
      }),
      //   PWA({
      //     outDir: ".vitepress/dist",
      //     manifest: {
      //       name: "VueUse",
      //       short_name: "VueUse",
      //       theme_color: "#ffffff",
      //       icons: [
      //         {
      //           src: "/pwa-192x192.png",
      //           sizes: "192x192",
      //           type: "image/png",
      //         },
      //         {
      //           src: "/pwa-512x512.png",
      //           sizes: "512x512",
      //           type: "image/png",
      //         },
      //       ],
      //     },
      //   }),
    ],

    optimizeDeps: {
      exclude: ["vue-demi"],
    },
  };
});
