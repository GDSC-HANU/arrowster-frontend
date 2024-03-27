<template>
  <ClientOnly>
    <NuxtPage />
    <template #placeholder>
      <common-loading-screen />
    </template>
  </ClientOnly>
</template>

<style>
@import url('~/assets/css/global.css');
</style>
