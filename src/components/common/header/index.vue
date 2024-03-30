<template>
  <div
    class="w-full fixed top-0 bg-white z-50 shadow-md md:px-8 px-4 py-4 text-black"
  >
    <div
      class="max-w-[1280px] mx-auto my-0 flex md:justify-between justify-start gap-4 md:gap-0 items-center"
    >
      <div class="md:hidden">
        <UButton
          icon="i-heroicons-bars-3-center-left"
          size="sm"
          color="primary"
          square
          variant="solid"
          @click="isOpen = true"
        />

        <USlideover v-model="isOpen" side="left">
          <div
            class="p-4 flex flex-1 flex-col gap-8 items-center justify-center"
          >
            <CommonHeaderLogo />
            <ul class="flex flex-col gap-8 text-[20px] flex-1 w-full">
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
            <div class="md:gap-4 gap-2 flex flex-col w-full">
              <nuxt-link to="/sign-up">
                <UButton
                  class="w-full items-center justify-center"
                  label="Sign up"
                  color="white"
                  variant="outline"
                  size="xl"
                />
              </nuxt-link>
              <nuxt-link to="/sign-in">
                <UButton
                  class="w-full items-center justify-center"
                  label="Sign in"
                  color="blue"
                  variant="solid"
                  size="xl"
                />
              </nuxt-link>
            </div>
          </div>
        </USlideover>
      </div>
      <CommonHeaderLogo />
      <ul class="md:flex gap-12 text-[18px] hidden">
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
      <div class="md:gap-4 gap-2 hidden md:flex">
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

<script setup>
const isOpen = ref(false)
</script>

<style lang="scss" scoped></style>
