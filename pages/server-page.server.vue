<template>
  <div>
    <div>Server page: {{ count }}</div>

    <!-- Interactive components don't work on pages unless set to 'deep'-->
    <Hydrated :starting-count="17" />
  </div>
</template>

<script setup lang="ts">
// What does "lazy" prop do in the defineServerPage function?
const count = ref(6);

onMounted(() => {
  setInterval(() => {
    count.value++;
  }, 1000);
});
</script>
