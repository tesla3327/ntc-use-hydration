<template>
  <div>
    <div>Using nested slots:</div>
    <WithSlot>
      <slot />
    </WithSlot>
  </div>
</template>

<script setup>
// Can we access just islandContext or also the app context?
// not documented on `ssrContext`
</script>
