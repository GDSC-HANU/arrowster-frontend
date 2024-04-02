<script setup lang="ts">
import { type FormState } from '@/types'
const { fetchCountries, country } = useCountry()

onMounted(fetchCountries)

const formState = reactive<FormState>({
  gpa: null,
  selectedCourse: null,
  selectedGradeLevel: null,
  selectedCountry: null,
  selectedBudget: null
})

const formStateComputed = computed({
  get: () => formState,
  set: (newValue: FormState) => {
    Object.assign(formState, newValue)
  }
})
</script>

<template>
  <div
    class="max-w-[1280px] mx-auto my-0 flex flex-col-reverse md:flex-row justify-center items-center md:mt-10 mt-20 md:gap-16 gap-8 p-4"
  >
    <div class="max-w-[516px] flex flex-col gap-12">
      <h1
        class="md:text-5xl text-3xl text-center md:text-start text-black font-bold"
      >
        Discover and enroll in
        <span class="text-blue-700">International Colleges</span>
      </h1>
      <Form
        v-model="formStateComputed"
        :courses="courses"
        :country="country"
        :gradeLevel="gradeLevel"
        :budget="budget"
      >
        <template #submit-button>
          <UButton
            type="submit"
            label="Get Started"
            class="w-full flex justify-center items-center mt-8"
            size="xl"
            color="blue"
            variant="solid"
          />
        </template>
      </Form>
    </div>
    <NuxtImg width="514" src="/images/home/form_img.png" />
  </div>
</template>
