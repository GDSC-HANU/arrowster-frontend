<template>
  <NuxtLayout>
    <div>
      <h1 class="text-red-500">{{ counterStore.count }}</h1>
      <button @click="counterStore.increment">Increment</button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

const counterStore = useCounterStore()
</script>

<style scoped></style>
