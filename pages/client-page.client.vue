<template>
  <div>Client page: {{ count }}</div>
  <JustServer />
</template>

<script setup lang="ts">
const count = ref(0);

onMounted(() => {
  setInterval(() => {
    count.value++;
  }, 1000);
});
</script>
