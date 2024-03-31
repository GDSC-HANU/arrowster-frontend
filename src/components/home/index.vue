<script setup lang="ts">
import { useUniversityStore } from '@/stores/university'
import { type FormState } from '@/types'
const client = useSupabaseClient()
const user = useSupabaseUser()
const universityStore = useUniversityStore()
const { fetchCountries, country } = useCountry()
console.log(country)

onMounted(fetchCountries)

const courses: string[] = [
  'Art & Design',
  'Business & Management',
  'Computers & Technology',
  'Criminal Justice & Legal',
  'Education & Teaching',
  'Liberal Arts & Humanities',
  'Nursing & Healthcare',
  'Psychology & Counseling',
  'Science & Engineering',
  'Trade & Careers'
]

const budget: string[] = [
  '500 - 1000$',
  '1001 - 5000$',
  '5001 - 10000$',
  '10001 - 20000$',
  'More than 20000$'
]

const gradeLevel: string[] = ['Bachelor', 'Master']

const formState: FormState = reactive({
  gpa: null,
  selectedCourse: null,
  selectedGradeLevel: null,
  selectedCountry: null,
  seletedBudget: null
})

const onSubmit = () => {
  console.log(
    formState.gpa,
    formState.selectedCourse,
    formState.selectedGradeLevel,
    formState.selectedCountry?.value
  )

  universityStore.setFormState(formState)
  universityStore.fetchUniversities()
}
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
      <UForm class="space-y-8 w-full" @submit="onSubmit">
        <UFormGroup name="gpa">
          <UInput
            v-model="formState.gpa"
            size="xl"
            color="white"
            variant="outline"
            placeholder="Your GPA"
          />
        </UFormGroup>

        <UFormGroup name="course-preference">
          <USelectMenu
            v-model="formState.selectedCourse"
            :options="courses"
            variant="outline"
            placeholder="Course Preference"
            size="xl"
          />
        </UFormGroup>
        <UFormGroup name="course-preference">
          <USelectMenu
            searchable
            searchable-placeholder="Search a country..."
            v-model="formState.selectedCountry"
            :options="country.map((c) => ({ label: c.name, value: c.id }))"
            variant="outline"
            placeholder="Location"
            size="xl"
          />
        </UFormGroup>
        <UFormGroup name="course-preference">
          <USelectMenu
            v-model="formState.selectedGradeLevel"
            :options="gradeLevel"
            variant="outline"
            placeholder="Grade Level"
            size="xl"
          />
        </UFormGroup>
        <UFormGroup name="course-preference">
          <USelectMenu
            v-model="formState.seletedBudget"
            :options="budget"
            variant="outline"
            placeholder="Tuition Budget (in USD/year)"
            size="xl"
          />
        </UFormGroup>

        <NuxtLink to="/suitable">
          <UButton
            type="submit"
            label="Get Started"
            class="w-full flex justify-center items-center"
            size="xl"
            color="blue"
            variant="solid"
          />
        </NuxtLink>
      </UForm>
    </div>
    <NuxtImg width="514" src="/images/home/form_img.png" />
  </div>
</template>
