<template>
  <div class="w-full px-4">
    <nav class="w-full">
      <ul class="flex-col flex gap-4 whitespace-nowrap text-[18px]">
        <li class="w-full">
          <nuxt-link
            class="flex w-full items-center justify-center gap-2"
            to="/find-college"
          >
            <UButton
              variant="ghost"
              class="w-full bg-[#EFF6FF]"
              size="xl"
              icon="i-heroicons-home"
              label="Dashboard"
            />
          </nuxt-link>
        </li>

        <li class="w-full">
          <nuxt-link
            class="flex w-full items-center justify-center gap-2"
            to="/find-college"
          >
            <UButton
              variant="default"
              class="w-full"
              size="xl"
              icon="i-heroicons-magnifying-glass"
              label="Find College"
            />
          </nuxt-link>
        </li>

        <li class="w-full">
          <nuxt-link
            class="flex w-full items-center justify-center gap-2"
            to="/find-college"
          >
            <UButton
              variant="default"
              class="w-full"
              size="xl"
              icon="i-heroicons-arrows-right-left"
              label="Comparison"
            />
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
