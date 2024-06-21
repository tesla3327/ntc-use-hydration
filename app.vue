<template>useHydration</template>

<script setup>
useComponentHydration(
  'some-unique-key',
  () => {
    console.log('On the server');
    return 'my unique value for hydration';
  },
  (value) => console.log('On the client', value)
);

// We can also access our payload value here once hydrated
if (import.meta.client) {
  const nuxtApp = useNuxtApp();
  console.log(nuxtApp.payload['some-unique-key']);
}
</script>
