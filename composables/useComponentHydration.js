export default (key, get, set) => {
  const nuxtApp = useNuxtApp();

  nuxtApp.hooks.hook('app:rendered', () => {
    nuxtApp.payload[key] = get();
  });

  nuxtApp.hooks.hook('app:mounted', () => {
    set(nuxtApp.payload[key]);
  });
};
