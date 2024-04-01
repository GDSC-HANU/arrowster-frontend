<script setup lang="ts">
import { useUniversityStore } from '@/stores/university'
import { type FormState } from '@/types'

const universityStore = useUniversityStore()
const router = useRouter()
const props = defineProps({
  modelValue: {
    type: Object as PropType<FormState>,
    required: true
  },
  onSubmit: Function as PropType<() => void>,
  courses: Array as PropType<string[]>,
  country: Array as PropType<{ name: string; id: string }[]>,
  gradeLevel: Array as PropType<string[]>,
  budget: Array as PropType<string[]>
})

const emit = defineEmits(['submit', 'updateFormState', 'update:modelValue'])

const onSubmit = () => {
  try {
    universityStore.setFormState(props.modelValue)
    universityStore.fetchUniversities()
    router.push('/suitable')
    emit('submit')
  } catch (error) {
    console.error(error)
  }
}

const updateFormState = (key: keyof FormState, value: any) => {
  const updatedFormState = { ...universityStore.formState, [key]: value }
  universityStore.setFormState(updatedFormState as FormState)
  emit('update:modelValue', updatedFormState)
}
</script>

<template>
  <UForm class="space-y-8 w-full" @submit="onSubmit">
    <UFormGroup name="gpa">
      <UInput
        :modelValue="props.modelValue.gpa"
        @update:modelValue="updateFormState('gpa', $event)"
        size="xl"
        color="white"
        variant="outline"
        placeholder="Your GPA"
      />
    </UFormGroup>
    <UFormGroup name="course-preference">
      <USelectMenu
        :modelValue="props.modelValue.selectedCourse"
        @update:modelValue="updateFormState('selectedCourse', $event)"
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
        :modelValue="props.modelValue.selectedCountry"
        @update:modelValue="updateFormState('selectedCountry', $event)"
        :options="country?.map((c) => ({ label: c.name, value: c.id }))"
        variant="outline"
        placeholder="Location"
        size="xl"
      />
    </UFormGroup>
    <UFormGroup name="course-preference">
      <USelectMenu
        :modelValue="props.modelValue.selectedGradeLevel"
        @update:modelValue="updateFormState('selectedGradeLevel', $event)"
        :options="gradeLevel"
        variant="outline"
        placeholder="Grade Level"
        size="xl"
      />
    </UFormGroup>
    <UFormGroup name="course-preference">
      <USelectMenu
        :modelValue="props.modelValue.seletedBudget"
        @update:modelValue="updateFormState('seletedBudget', $event)"
        :options="budget"
        variant="outline"
        placeholder="Tuition Budget (in USD/year)"
        size="xl"
      />
    </UFormGroup>
    <slot name="submit-button"></slot>
  </UForm>
</template>
