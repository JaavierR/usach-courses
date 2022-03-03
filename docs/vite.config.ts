import { resolve } from "path";
import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig(async () => {
  return {
    server: {
      hmr: {
        overlay: false,
      },
      fs: {
        allow: [resolve(__dirname, "..")],
      },
    },
    plugins: [
      // custom
      //   MarkdownTransform(),
      //   ChangeLog(changeLog),
      //   Contributors(contributions),
      //   NavbarFix(),

      // plugins
      Components({
        dirs: resolve(__dirname, ".vitepress/theme/components"),
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
      exclude: ["vue-demi", "@vue/theme"],
    },
  };
});
