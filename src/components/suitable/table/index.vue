<script setup lang="ts">
import { useUniversityStore } from '@/stores/university'
import { type FormState } from '@/types'

const { fetchCountries, country } = useCountry()
const universityStore = useUniversityStore()
const isOpen = ref(false)

const closeModal = () => {
  isOpen.value = false
}

const columns = [
  {
    key: 'ntn',
    label: ''
  },
  {
    key: 'school',
    label: 'School',
    sortable: true
  },
  {
    key: 'location',
    label: 'Location',
    sortable: true
  },
  {
    key: 'from_fee',
    label: 'Tuition Fee',
    sortable: true
  },
  {
    key: 'deadline',
    label: 'Deadline',
    sortable: true
  },
  {
    key: 'ranking',
    label: 'Ranking',
    sortable: true
  },
  {
    key: 'action'
  }
]
onMounted(fetchCountries)
</script>

<template>
  <div class="w-full">
    <div class="flex px-5 lg:px-0 flex-col gap-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold leading-8 text-slate-900">
          Best Suitable International Colleges
        </h1>

        <UButton
          color="gray"
          variant="ghost"
          label="Change filter data"
          size="sm"
          icon="i-heroicons-pencil"
          class="text-xs font-medium"
          @click="isOpen = true"
        />
        <UModal v-model="isOpen">
          <UCard
            :ui="{
              ring: '',
              divide: 'divide-y divide-gray-100 dark:divide-gray-800'
            }"
          >
            <template #header>
              <h1 class="text-3xl text-center">Edit filter data</h1>
            </template>

            <Form
              v-model="universityStore.formState as FormState"
              :courses="courses"
              :country="country"
              :gradeLevel="gradeLevel"
              :budget="budget"
              @submit="closeModal"
            >
              <template #submit-button>
                <div class="flex mt-0 justify-end gap-4">
                  <UButton
                    color="gray"
                    type="button"
                    label="Cancel"
                    class="flex justify-center items-center"
                    size="xl"
                    variant="solid"
                    @click="isOpen = false"
                  />
                  <UButton
                    type="submit"
                    label="Save"
                    class="flex justify-center items-center"
                    size="xl"
                    color="blue"
                    variant="solid"
                    @submit="closeModal"
                  />
                </div>
              </template>
            </Form>
          </UCard>
        </UModal>
      </div>

      <div class="w-full border-[1px] border-gray-300 rounded-md">
        <UTable
          :loading="false"
          :loading-state="{
            icon: 'i-heroicons-arrow-path-20-solid',
            label: 'Loading...'
          }"
          :progress="{ color: 'primary', animation: 'carousel' }"
          :columns="columns"
          :rows="universityStore.universities"
        >
          <template #school-data="{ row }">
            <div class="flex items-center gap-[10px]">
              <div>
                <UAvatar size="xs" :src="row.avatar" alt="Avatar" />
              </div>
              <div>
                <span class="leading-5 text-gray-500 text-sm">{{
                  row.name
                }}</span>
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

          <template #location-data="{ row }">
            <div>
              <span>
                {{ row.location.country }}
              </span>
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
        <div class="flex items-center justify-center border-t">
          <UButton
            color="gray"
            variant="ghost"
            label="View all result"
            class="py-4 rounded-md"
            size="xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
