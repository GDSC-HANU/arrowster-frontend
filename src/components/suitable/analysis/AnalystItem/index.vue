<template>
  <div class="w-full">
    <div class="w-full border-[1px] border-slate-300 rounded-2xl p-9 flex flex-col gap-4">
      <div>
        <h3
          class="leading-8 font-bold text-2xl"
          :class="{
            'text-red-600': color === 'red',
            'text-blue-600': color === 'blue',
            'text-green-600': color === 'green',
            'text-orange-500': color === 'orange',
          }"
        >
          {{ title }}
        </h3>
      </div>
      <div>
        <p class="text-justify text-sm leading-5">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: String,
  title: String,
})
</script>

<style scoped></style>
