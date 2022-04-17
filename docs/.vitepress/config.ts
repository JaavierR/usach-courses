// @ts-expect-error missing type
import base from "@vue/theme/config";

const themeConfig = async () => {
  const config = await base();
  // config.markdown.highlight = await highlight();
  return config;
};

const DSIGuide = [
  { text: "Introducción", link: "/dsi/" },
  { text: "Evaluaciones", link: "/dsi/evaluaciones" },
  { text: "Recursos", link: "/dsi/recursos" },
];

const IOTGuide = [{ text: "Introducción", link: "/iot/" }];

const DSISideBar = [
  { text: "Empezando", items: DSIGuide },
  { text: "BPMN", items: [{ text: "Que es BPMN?", link: "/dsi/bpmn" }] },
  { text: "UML", items: [{ text: "Introducción", link: "/dsi/uml/" }] },
  {
    text: "Bases de datos",
    items: [{ text: "Introducción", link: "/dsi/bases-de-datos/" }],
  },
  {
    text: "Desarrollo web",
    items: [{ text: "Introducción", link: "/dsi/desarrollo-web/" }],
  },
];

const IOTSideBar = [{ text: "Empezando", items: IOTGuide }];

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  extends: themeConfig,

  title: "Cursos DII USACH",
  description:
    "Material de los cursos de DSI e IOT del Dpto. de Ingeniería Industrial USACH.",
  lang: "es-CL",

  themeConfig: {
    logo: "/favicon.svg",

    docsDir: "docs",

    algolia: {
      apiKey: "ad993689dc68876bd332744d5f1d1835",
      indexName: "usach-courses",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/JaavierR/usach-courses" },
    ],

    nav: [
      {
        text: "Cursos",
        items: [
          { text: "DSI", link: "/dsi/" },
          { text: "IOT", link: "/iot/" },
        ],
      },
    ],

    sidebar: {
      "/dsi/": DSISideBar,
      "/guidelines": DSISideBar,
      "/iot/": IOTSideBar,
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
