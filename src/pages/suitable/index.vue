<template>
  <NuxtLayout>
    <div class="mb-12 mt-[120px] grid place-items-center p-0">
      <div class="max-w-[1280px] w-full flex items-center flex-col">
        <div class="max-w-[990px] w-full items-center flex flex-col gap-12">
          <suitable-table />
          <suitable-analysis />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
})
</script>

<style scoped></style>
