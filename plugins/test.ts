export default defineNuxtPlugin((nuxtApp) => {
  // This hook only works with plugins
  nuxtApp.hooks.hook('app:created', () => {
    console.log('[plugin] App has been created!');
  });
});
