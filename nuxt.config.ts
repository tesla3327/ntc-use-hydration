import tailwindcssTypography from '@tailwindcss/typography';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      plugins: [tailwindcssTypography],
    },
  },
});