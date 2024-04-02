<script setup lang="ts">
import { useFormStateStore } from '~/stores/form'

definePageMeta({
  colorMode: 'light'
})
const user = useSupabaseUser()
const router = useRouter()
const formStateStore = useFormStateStore()

watch(
  user,
  () => {
    if (user.value) {
      return navigateTo('/')
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <p class="text-3xl">Redirecting...</p>
  </div>
</template>
