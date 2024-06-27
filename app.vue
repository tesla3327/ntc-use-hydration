<template>
  <div class="prose m-auto max-w-xl py-8">
    <h1>Hooking into Hydration</h1>

    <p>Here's how you'd write your own custom implementation of <code>useState</code>, (or modify it to suit your own needs).</p>

    <hr />

    <h2>Basics</h2>
    <p>Here we show hooking into the hydration cycle from our component. We can also directly grab the value from the Nuxt payload.</p>
    <div class="flex items-center justify-between w-full">
      <span>Direct from payload:</span>
      <code>{{ directFromPayload }}</code>
    </div>

    <hr />

    <h2>Syncing server and client</h2>

    <p>If we use a regular <code>ref</code> and generate a random number, it will generate a <em>different</em> number on the server and client side.</p>
    <p>However, we can take the server-generated number and stash it in the payload to hydrate it.</p>
  </div>
</template>

<script setup>
/**
 * Demo 1: Hooking into hydration
 */
useComponentHydration(
  'some-unique-key',
  () => {
    // Runs on the server
    console.log("I'm running on the server");
    return 'my unique value for hydration';
  },
  (value) => {
    // Runs on the client
    console.log("I'm running on the client");
    console.log('The value is:', value);
  }
);

// We can also access our payload value here once hydrated
const directFromPayload = ref('');
onMounted(() => {
  const nuxtApp = useNuxtApp();
  directFromPayload.value = nuxtApp.payload['some-unique-key'];
});


/**
 * Demo 2: Using hydration to sync server and client
 */
// We can make our own lite version of useState
function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

// If we run this we get different numbers on the server and client
// Check this by looking at the console logs
const randomNumber = ref(getRandomNumber());
console.log('Random number:', randomNumber.value);

// We can make it safe by stashing it in the payload
const ssrSafeRandom = ref();
useComponentHydration(
  'random-number',
  () => {
    const serverValue = getRandomNumber();
    console.log('(Server) Synced random number:', serverValue);
    return serverValue;
  },
  (value) => {
    ssrSafeRandom.value = value;
  }
);

// Log when the value is hydrated on the client
watch(ssrSafeRandom, () => {
  console.log('(Client) Synced random number:', ssrSafeRandom.value);
});
</script>
