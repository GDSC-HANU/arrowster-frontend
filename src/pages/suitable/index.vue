<template>
  <ClientOnly>
    <NuxtLayout>
      <div class="mb-12 mt-[120px] grid place-items-center p-0">
        <div class="max-w-[1280px] relative w-full flex items-start">
          <div class="w-[200px] sticky top-[120px]">
            <suitable-sidebar />
          </div>

          <div class="pl-10 w-full items-center flex flex-col gap-12">
            <suitable-table />
            <suitable-analysis />
          </div>
        </div>
      </div>
    </NuxtLayout>
  </ClientOnly>
</template>

<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
})
</script>

<style scoped></style>
