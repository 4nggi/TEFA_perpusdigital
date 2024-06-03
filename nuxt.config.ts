// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  node_modules: ["@nuxtjs/supabase"],
  supabase: { redirect: false },
})
