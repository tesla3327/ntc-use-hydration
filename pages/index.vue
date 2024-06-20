<template>
  <div>
    Hi there

    <NestedClient />

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

    <hr />

    <div>
      <JustServer />
      <Paired :starting-count="startingCount" />
      <hr />
      <Hydrated :starting-count="startingCount" />
    </div>

    <hr />

    <WithSlot>
      <!-- Props passed to interactive components within the slot
           of a server component do not update correctly -->
      <Hydrated :starting-count="startingCount" />
      <Paired :starting-count="startingCount" />
    </WithSlot>

    <hr />

    <h3>Nesting server components</h3>

    <NestedSlots>
      <div>Hello there</div>
    </NestedSlots>

    <!-- Multiple levels of nesting doesn't work -->
    <!-- <WithSlot>
      <WithSlot>
        <Hydrated
          nuxt-client
          :starting-count="startingCount"
        />
        <Paired
          nuxt-client
          :starting-count="startingCount"
        />
      </WithSlot>
    </WithSlot> -->

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
const startingCount = ref(5);
function increment() {
  startingCount.value += 10;
}
</script>
