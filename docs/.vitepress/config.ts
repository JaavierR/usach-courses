// @ts-expect-error missing type
import base from "@vue/theme/config";

const themeConfig = async () => {
  const config = await base();
  // config.markdown.highlight = await highlight();
  return config;
};

const Guide = [
  { text: "Introduccion", link: "/guide/" },
  { text: "Guidelines", link: "/guidelines" },
];

const Links = [
  { text: "Add-ons", link: "/add-ons" },
  { text: "Ecosystem", link: "/ecosystem" },
  { text: "Export Size", link: "/export-size" },
  { text: "Recent Updated", link: "/recent-updated" },
];

const DSISideBar = [
  { text: "Empezando", items: Guide },
  // { text: "Core Functions", items: CoreCategories },
  // { text: "Add-ons", items: AddonCategories },
  // { text: "Links", items: Links },
];

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  extends: themeConfig,

  title: "Cursos DII USACH",
  description:
    "Material de los cursos de DSI e IOT del Dpto. de Ingenieria Industrial USACH.",
  lang: "es-CL",

  themeConfig: {
    logo: "/favicon.svg",

    docsDir: "docs",

    algolia: {
      apiKey: "a99ef8de1b2b27949975ce96642149c6",
      indexName: "vueuse",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/JaavierR" }],

    nav: [
      {
        text: "DSI",
        items: [{ text: "Introduccion", items: Guide }],
      },
    ],

    sidebar: {
      "/guide/": DSISideBar,
      // "/contributing": DefaultSideBar,
      // "/add-ons": DefaultSideBar,
      // "/ecosystem": DefaultSideBar,
      // "/guidelines": DefaultSideBar,
      // "/export-size": DefaultSideBar,
      // "/recent-updated": DefaultSideBar,
    },
  },
  head: [
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "icon", href: "/favicon-32x32.png", type: "image/png" }],
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    ["meta", { name: "author", content: "Anthony Fu" }],
    ["meta", { property: "og:title", content: "VueUse" }],
    ["meta", { property: "og:image", content: "https://vueuse.org/og.png" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Collection of essential Vue Composition Utilities",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:creator", content: "@antfu7" }],
    ["meta", { name: "twitter:image", content: "https://vueuse.org/og.png" }],

    ["link", { rel: "dns-prefetch", href: "https://fonts.gstatic.com" }],
    [
      "link",
      {
        rel: "preconnect",
        crossorigin: "anonymous",
        href: "https://fonts.gstatic.com",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
      },
    ],
  ],
};

export default config;
