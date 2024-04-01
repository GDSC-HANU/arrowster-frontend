<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()
const isOpen = ref(false)
const confirmRoute = `${useRuntimeConfig().public.baseUrl}/confirm`

const logout = async () => {
  await client.auth.signOut()
  navigateTo(confirmRoute)
}

console.log('user', user.value?.email)

const items = [
  [
    {
      label: `${user.value?.email}`,
      slot: 'account',
      disabled: true
    }
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-mdi-logout'
    }
  ]
]
</script>

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
              <UButton
                class="w-full items-center justify-center"
                label="Sign in"
                color="blue"
                variant="solid"
                size="xl"
                @click="
                  client.auth.signInWithOAuth({
                    provider: 'google',
                    options: { redirectTo: confirmRoute }
                  })
                "
              />
            </div>
          </div>
        </USlideover>
      </div>
      <CommonHeaderLogo />

      <div class="md:gap-4 gap-2 hidden md:flex" v-if="!user">
        <UButton
          label="Sign in"
          color="blue"
          variant="solid"
          size="xl"
          @click="
            client.auth.signInWithOAuth({
              provider: 'google',
              options: { redirectTo: confirmRoute }
            })
          "
        />
      </div>
      <UDropdown
        v-if="user"
        :items="items"
        :ui="{ item: { disabled: 'cursor-text select-text' } }"
        :popper="{ placement: 'bottom-end' }"
      >
        <UAvatar :src="user.user_metadata.avatar_url" size="md" />

        <template #account="{ item }">
          <div class="text-left">
            <p>Signed in as</p>
            <p class="truncate font-medium text-gray-900 dark:text-white">
              {{ item.label }}
            </p>
          </div>
        </template>

        <template #item="{ item }">
          <UButton
            class="p-1 w-full items-center justify-center"
            v-if="user"
            @click="logout"
            icon="i-mdi-logout"
            size="sm"
            color="primary"
            variant="ghost"
            :label="item.label"
            :trailing="true"
          />
        </template>
      </UDropdown>
      <!-- -->
    </div>
  </div>
</template>
