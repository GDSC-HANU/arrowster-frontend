<script setup lang="ts">
definePageMeta({
  colorMode: 'light'
})
const user = useSupabaseUser()
const { auth } = useSupabaseClient()
</script>
<template>
  <ClientOnly>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <h2 class="my-6 text-center text-3xl font-bold text-white">
        Sign in to your account
      </h2>
      <CommonLoginCard>
        <UButton
          class="mt-3"
          icon="i-mdi-google"
          block
          label="Google Sign In"
          variant="white"
          @click="
            auth.signInWithOAuth({
              provider: 'google',
              options: { redirectTo }
            })
          "
        />
      </CommonLoginCard>
    </div>
  </ClientOnly>
</template>
