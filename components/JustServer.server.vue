<template>
  <div>
    <div>This is on the server</div>

    <Hydrated nuxt-client :starting-count="39" />
  </div>
</template>

<script setup>
// Can we access just islandContext or also the app context?
// not documented on `ssrContext`
</script>
