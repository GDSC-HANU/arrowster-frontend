<template>
  <div class="w-full shadow-md px-8 py-4 text-black">
    <div class="max-w-[1280px] mx-auto my-0 flex justify-between items-center">
      <nuxt-link to="/">
        <NuxtImg format="webp" width="160" src="/images/logo/Logo.svg" />
      </nuxt-link>
      <ul class="flex gap-12 text-[18px]">
        <li>
          <nuxt-link to="/find-college">Find College</nuxt-link>
        </li>
        <li>
          <nuxt-link to="wishlist">Wishlist</nuxt-link>
        </li>
        <li>
          <nuxt-link to="comparison">Comparison</nuxt-link>
        </li>
      </ul>
      <div class="flex gap-4">
        <nuxt-link to="/sign-up">
          <UButton label="Sign up" color="white" variant="outline" size="xl" />
        </nuxt-link>
        <nuxt-link to="/sign-in">
          <UButton label="Sign in" color="blue" variant="solid" size="xl" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
