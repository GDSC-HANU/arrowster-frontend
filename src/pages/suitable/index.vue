<template>
  <ClientOnly>
    <NuxtLayout>
      <div class="mb-12 mt-24 md:mt-[100px] grid place-items-center p-0">
        <div class="max-w-[1280px] relative w-full flex items-start">
          <div class="md:block hidden w-[200px] sticky top-[100px]">
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
