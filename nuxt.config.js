/*
 * @Description:
 * @Version: 2.0
 * @Autor: flames
 * @Date: 2020-06-13 16:08:49
 * @LastEditors: flames
 * @LastEditTime: 2020-06-14 01:34:41
 */

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ff0000" },
  /*
   ** Global CSS
   */
  css: [
    "ant-design-vue/dist/antd.css",
    "normalize.css/normalize.css",
    "./assets/css/common.css",
    "./assets/css/global.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/antd-ui", "@/plugins/interceptor"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "cookie-universal-nuxt", "@nuxtjs/auth"],
  axios: {
    proxy: true
  },
  proxy: {
    "/api": "http://localhost:8080"
  },
  auth: {
    redirect: {
      callback: "/callback"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/auth/login",
            method: "post",
            propertyName: "token"
          },
          logout: { url: "/api/auth/logout", method: "post" },
          user: {
            url: "/api/auth/user",
            method: "get",
            propertyName: "user"
          }
        },
        tokenName: "Authorization",
        tokenType: "Bearer",
        globalToken: true,
        autoFetchUser: true
      }
    }
  },
  // serverMiddleware: ["./api/auth"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    middleware: ["auth"],
    extendRoutes(routes, resolve) {
      routes.push({
        name: "article",
        path: "/article",
        component: resolve(__dirname, "pages/goods.vue")
      });
    }
  }
};
