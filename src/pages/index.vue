<template>
  <NuxtLayout>
    <div>
      <h1 class="text-red-500">{{ counterStore.count }}</h1>
      <UButton @click="counterStore.increment">Increment</UButton>
    </div>
    <NuxtImg
      width="200"
      src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/322545896_634155595151557_3943550068389317693_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHjzKw3yZkKkfBO6J9_wxLczdnIV8odlATN2chXyh2UBHfBVyQJBc6QPSreewLkmZQr6DsLNg_HhGSb3up_7w3V&_nc_ohc=RlAR8R-plTMAX_-ro0G&_nc_ht=scontent.fhan15-2.fna&oh=00_AfBROftVu68lCKYN1xd6R4ntTF_rK272z7e0mTc3-N6hAg&oe=6608BA32"
    />
    <nuxt-link to="/login">login</nuxt-link>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

const counterStore = useCounterStore()
</script>
