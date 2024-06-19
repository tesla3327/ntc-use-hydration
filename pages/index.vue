<template>
  <div>
    Hi there

    <button @click="increment()">Increment</button>

    <NuxtIsland
      name="TestComponent"
      :props="{
        startingCount,
      }"
    />

    <!-- What does the lazy prop actually do here? -->
    <NuxtIsland
      name="FolderInAFolder"
      :props="{
        startingCount,
      }"
    />

    <div>
      <JustServer />
      <Paired :starting-count="startingCount" />
      <hr />
      <Hydrated :starting-count="startingCount" />
    </div>

    <hr />

    <WithSlot>
      <Hydrated
        nuxt-client
        :starting-count="startingCount"
      />
      <Paired nuxt-client :starting-count="startingCount" />
    </WithSlot>

    <hr />

    <WithSlotIsomorphic>
      <Hydrated :starting-count="startingCount" />
      <Paired :starting-count="startingCount" />
    </WithSlotIsomorphic>

    <hr />

    <WithSlotClient>
      <Hydrated :starting-count="startingCount" />
      <Paired :starting-count="startingCount" />
    </WithSlotClient>
  </div>
</template>

<script setup>
import WithSlotIsomorphic from '~/components/WithSlotIsomorphic.vue';

const startingCount = ref(5);
function increment() {
  startingCount.value += 10;
}
</script>
