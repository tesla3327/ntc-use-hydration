<template>
  <div>
    <button v-if="!counterFetched" @click="fetchCounter">
      Fetch Counter
    </button>

    <!-- Will load Counter if not loaded already -->
    <button
      @click="
        showCounter = !showCounter;
        counterFetched = true;
      "
    >
      {{ showCounter ? 'Hide' : 'Show' }} Counter
    </button>

    <!-- Must use Lazy prefix or component will be loaded on page load -->
    <LazyCounter v-if="showCounter" />
  </div>
</template>

<script setup>
const showCounter = ref(false);
const counterFetched = ref(false);

async function fetchCounter() {
  counterFetched.value = true;
  // Can also use preloadComponents
  await prefetchComponents('Counter');
}
</script>
