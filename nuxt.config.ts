// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules : ['@nuxt/ui', "nuxt-directus", "@nuxt/image", 'nuxt-primevue'],
  directus :{ 
    devtools: true,
    url: "https://localhost:8055"
  },
  plugins: ['~/plugins/directus.js']
})