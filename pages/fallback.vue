<template>
  <h1>Fallbacks:</h1>

  <!-- <FolderInAFolder :starting-count="startingCount"> -->
  <!-- Does not render during an SSR error, only on client-side errors -->
  <!-- <template #fallback> Fallback </template>
</FolderInAFolder> -->
  <!--
<ServerComponentError>
  <template #fallback> NuxtIsland fallback </template>
</ServerComponentError> -->

  <!-- <NuxtClientFallback>
  <template #default>
    <ServerComponentError />
  </template>

  <template #fallback>
    <div>NuxtClientFallback fallback</div>
  </template>
</NuxtClientFallback> -->

  <NuxtClientFallback
    fallback-tag="code"
    fallback="what up"
  >
    <ServerComponentError />
  </NuxtClientFallback>
</template>
