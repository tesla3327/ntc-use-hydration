// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    componentIslands: {
      selectiveClient: 'deep',
    },
    clientFallback: true,
  },
});
