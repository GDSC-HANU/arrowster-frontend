<script setup lang="ts">
import { useUniversityStore } from '@/stores/university'
import { useFormStateStore } from '@/stores/form'
import { type FormState } from '@/types'

const universityStore = useUniversityStore()
const formStateStore = useFormStateStore()
const router = useRouter()
const emit = defineEmits(['submit', 'updateFormState', 'update:modelValue'])
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

const onSubmit = () => {
  if (validate(props.modelValue).length > 0) {
    // display error messages
    console.error(errors)
    return
  }

  try {
    formStateStore.setFormState(props.modelValue)
    universityStore.fetchUniversities()
    router.push('/suitable')
    emit('submit')
  } catch (error) {
    console.error(error)
  }
}

const updateFormState = (key: keyof FormState, value: any) => {
  const updatedFormState = { ...formStateStore.formState, [key]: value }
  formStateStore.setFormState(updatedFormState as FormState)
  emit('update:modelValue', updatedFormState)
  const errorIndex = errors.findIndex((e) => e.path === key)
  if (errorIndex !== -1) {
    if (validateField(key, value)) {
      errors.splice(errorIndex, 1)
    }
  } else if (!validateField(key, value)) {
    const errorMessage = getErrorMessage(key)
    errors.push({ path: key, message: errorMessage })
  }
}
</script>

<template>
  <UForm class="space-y-4 w-full" @submit="onSubmit" :state="props.modelValue">
    <UFormGroup name="gpa">
      <UInput
        :modelValue="props.modelValue.gpa"
        :color="errors.find((e) => e.path === 'gpa') ? 'red' : 'white'"
        @update:modelValue="updateFormState('gpa', $event)"
        size="xl"
        variant="outline"
        placeholder="Your GPA"
      />
      <div v-show="errors.find((e) => e.path === 'gpa')" class="text-red-500">
        {{ errors.find((e) => e.path === 'gpa')?.message }}
      </div>
    </UFormGroup>
    <UFormGroup name="course-preference">
      <USelectMenu
        :modelValue="props.modelValue.selectedCourse"
        :color="
          errors.find((e) => e.path === 'selectedCourse') ? 'red' : 'white'
        "
        @update:modelValue="updateFormState('selectedCourse', $event)"
        :options="courses"
        variant="outline"
        placeholder="Course Preference"
        size="xl"
      />
      <div
        v-show="errors.find((e) => e.path === 'selectedCourse')"
        class="text-red-500"
      >
        {{ errors.find((e) => e.path === 'selectedCourse')?.message }}
      </div>
    </UFormGroup>
    <UFormGroup name="course-preference">
      <USelectMenu
        searchable
        searchable-placeholder="Search a country..."
        :color="
          errors.find((e) => e.path === 'selectedCountry') ? 'red' : 'white'
        "
        :modelValue="props.modelValue.selectedCountry"
        @update:modelValue="updateFormState('selectedCountry', $event)"
        :options="country?.map((c) => ({ label: c.name, value: c.id }))"
        variant="outline"
        placeholder="Location"
        size="xl"
      />
      <div
        v-show="errors.find((e) => e.path === 'selectedCountry')"
        class="text-red-500"
      >
        {{ errors.find((e) => e.path === 'selectedCountry')?.message }}
      </div>
    </UFormGroup>
    <UFormGroup name="course-preference">
      <USelectMenu
        :modelValue="props.modelValue.selectedGradeLevel"
        :color="
          errors.find((e) => e.path === 'selectedGradeLevel') ? 'red' : 'white'
        "
        @update:modelValue="updateFormState('selectedGradeLevel', $event)"
        :options="gradeLevel"
        variant="outline"
        placeholder="Grade Level"
        size="xl"
      />
      <div
        v-show="errors.find((e) => e.path === 'selectedGradeLevel')"
        class="text-red-500"
      >
        {{ errors.find((e) => e.path === 'selectedGradeLevel')?.message }}
      </div>
    </UFormGroup>
    <UFormGroup name="course-preference">
      <USelectMenu
        :modelValue="props.modelValue.selectedBudget"
        :color="
          errors.find((e) => e.path === 'selectedBudget') ? 'red' : 'white'
        "
        @update:modelValue="updateFormState('selectedBudget', $event)"
        :options="budget"
        variant="outline"
        placeholder="Tuition Budget (in USD/year)"
        size="xl"
      />
      <div
        v-show="errors.find((e) => e.path === 'selectedBudget')"
        class="text-red-500"
      >
        {{ errors.find((e) => e.path === 'selectedBudget')?.message }}
      </div>
    </UFormGroup>
    <slot name="submit-button"></slot>
  </UForm>
</template>
