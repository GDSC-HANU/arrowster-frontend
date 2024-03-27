<template>
  <NuxtLayout>
    <div>
      <ClientOnly>
        <h1 class="text-red-500">{{ counterStore.count }}</h1>
        <UButton @click="counterStore.increment">Increment</UButton>
        <template #placeholder>
          <h1>...loading</h1>
        </template>
      </ClientOnly>
    </div>

    <nuxt-link to="/login">login</nuxt-link>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useStore } from '~/stores/counter'

const counterStore = useStore()
</script>
