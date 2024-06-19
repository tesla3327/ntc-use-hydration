<template>
  <div>Server page: {{ count }}</div>
</template>

<script setup lang="ts">
const count = ref(6);

onMounted(() => {
  setInterval(() => {
    count.value++;
  }, 1000);
});
</script>
