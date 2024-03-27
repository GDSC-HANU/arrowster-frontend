<template>
  <div
    class="max-w-[1280px] mx-auto my-0 flex justify-center items-center min-h-screen gap-16"
  >
    <div class="max-w-[516px] flex flex-col gap-12">
      <h1 class="text-[48px] text-black font-bold">
        Discover and enroll in
        <span class="text-blue-700">International Colleges</span>
      </h1>
      <UForm class="space-y-8 w-full" @submit="onSubmit">
        <UFormGroup name="gpa">
          <UInput
            v-model="state.email"
            size="xl"
            color="white"
            variant="outline"
            placeholder="Your GPA"
          />
        </UFormGroup>

        <UFormGroup name="course-preference">
          <UInputMenu
            v-model="selectedCourse"
            :options="courses"
            variant="outline"
            placeholder="Course Preference"
            size="xl"
          />
        </UFormGroup>
        <UFormGroup name="course-preference">
          <UInputMenu
            v-model="selectedGradeLevel"
            :options="gradeLevel"
            variant="outline"
            placeholder="Location"
            size="xl"
          />
        </UFormGroup>
        <UFormGroup name="course-preference">
          <UInputMenu
            v-model="selectedCountry"
            :options="country"
            variant="outline"
            placeholder="Grade Level"
            size="xl"
          />
        </UFormGroup>

        <UButton
          type="submit"
          label="Get Started"
          class="w-full flex justify-center items-center"
          size="xl"
          color="blue"
          variant="solid"
        />
      </UForm>
    </div>
    <NuxtImg width="514" src="/images/home/form_img.png" />
  </div>
</template>

<script setup>
const courses = [
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

const gradeLevel = [`Bachelor's`, `Master's`]
const country = ['All country']
const state = reactive({
  email: undefined,
  password: undefined
})

const selectedCourse = ref(courses[0])
const selectedGradeLevel = ref(gradeLevel[0])
const selectedCountry = ref(country[0])

function onSubmit() {
  // Do something with data
  console.log(state.email, state.password)
}
</script>

<style lang="scss" scoped></style>
