export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "My Project Not For Sale, Just for em",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios",
    "~/plugins/repositories",
    { src: "plugins/alert", ssr: false },
    { src: "plugins/v-tooltip", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/universal-storage"],
  axios: {
    baseURL:
      "https://newsapi.org/v2/everything?q=telsa&from=2022-03-18&sortBy=publishedAt&apiKey=8bec69b1fc4241e19f6a7d4dc0c73010",
    browserBaseURL:
      "https://newsapi.org/v2/everything?q=tesla&from=2022-03-18&sortBy=publishedAt&apiKey=8bec69b1fc4241e19f6a7d4dc0c73010   ",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  css: ["@/assets/css/index.css"],
  serverMiddleware: ["~/serverMiddleware"],
  /* router: {
    middleware: "redirectToHome",
  }, */
};
