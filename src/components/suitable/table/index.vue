<template>
  <div class="w-full">
    <div class="flex px-5 lg:px-0 flex-col gap-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold leading-8 text-slate-900">
          Best Suitable International Colleges
        </h1>

        <nuxt-link to="/all-colleges">
          <span class="font-medium text-sm leading-5">View all Colleges</span>
          <Icon name="uil:arrow-up-right" class="w-5 h-5" color="black" />
        </nuxt-link>
      </div>

      <div class="w-full border-[1px] border-gray-300 rounded-md">
        <UTable
          :loading="false"
          :loading-state="{
            icon: 'i-heroicons-arrow-path-20-solid',
            label: 'Loading...',
          }"
          :progress="{ color: 'primary', animation: 'carousel' }"
          :columns="columns"
          :rows="data"
        >
          <template #school-data="{ row }">
            <div class="flex items-center gap-[10px]">
              <div>
                <UAvatar size="xs" :src="row.avatar" alt="Avatar" />
              </div>
              <div>
                <span class="leading-5 text-gray-500 text-sm">{{ row.school }}</span>
              </div>
              <div v-if="row.sponsor">
                <UBadge
                  color="primary"
                  class="rounded-md pb-[5px] pt-[3px]"
                  variant="subtle"
                  >Sponsor</UBadge
                >
              </div>
            </div>
          </template>

          <template #from_fee-data="{ row }">
            <div>
              <span>
                {{ row.tuition_fee }}
              </span>
            </div>
          </template>

          <template #ranking-data="{ row }">
            <div>
              <span>{{ `#${row.ranking < 10 ? '0' : ''}${row.ranking}` }}</span>
            </div>
          </template>

          <template #action-data="{ row }">
            <UButton color="gray" class="text-xs font-medium" variant="solid"
              >Apply</UButton
            >
          </template>
        </UTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const columns = [
  {
    key: 'ntn',
    label: '',
  },
  {
    key: 'school',
    label: 'School',
    sortable: true,
  },
  {
    key: 'location',
    label: 'Location',
    sortable: true,
  },
  {
    key: 'from_fee',
    label: 'Tuition Fee',
    sortable: true,
  },
  {
    key: 'deadline',
    label: 'Deadline',
    sortable: true,
  },
  {
    key: 'ranking',
    label: 'Ranking',
    sortable: true,
  },
  {
    key: 'action',
  },
]

const data = [
  {
    ntn: 1,
    school: 'Harvard University ',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
    sponsor: true,
    location: 'American',
    tuition_fee: 'More than 20.000$',
    from_fee: 20001,
    to_fee: null,
    deadline: '01/04/2024',
    ranking: 1,
  },
  {
    ntn: 2,
    school: 'Whitney Francis ',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
    sponsor: false,
    location: 'American',
    tuition_fee: '10.001 - 20.000$',
    from_fee: 10001,
    to_fee: 20000,
    deadline: '01/04/2024',
    ranking: 100104,
  },
  {
    ntn: 3,
    school: 'Whitney Francis ',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
    sponsor: false,
    location: 'American',
    tuition_fee: '500 -  1.000$',
    from_fee: 500,
    to_fee: 1000,
    deadline: '01/04/2024',
    ranking: 9522,
  },
  {
    ntn: 4,
    school: 'Whitney Francis ',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
    sponsor: false,
    location: 'American',
    tuition_fee: '1.001 - 5.000$',
    from_fee: 1001,
    to_fee: 5000,
    deadline: '01/04/2024',
    ranking: 1,
  },
  {
    ntn: 5,
    school: 'Whitney Francis ',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
    sponsor: false,
    location: 'American',
    tuition_fee: '5.001 - 10.000$',
    from_fee: 5001,
    to_fee: 10000,
    deadline: '01/04/2024',
    ranking: 1,
  },
]
</script>

<style scoped></style>
