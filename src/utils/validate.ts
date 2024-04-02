import type { FormState } from '@/types'
import type { FormError } from '#ui/types'
import { reactive } from 'vue'

export let errors = reactive<FormError[]>([])
export const validate = (modelValue: FormState): FormError[] => {
  if (!modelValue.gpa) {
    errors.push({ path: 'gpa', message: 'Required' })
  } else if (!/^[0-4](\.[0-9])?$/.test(modelValue.gpa.toString())) {
    errors.push({
      path: 'gpa',
      message: 'Invalid GPA. Please enter a number between 0 and 4.'
    })
  }
  if (!modelValue.selectedCourse)
    errors.push({ path: 'selectedCourse', message: 'Required' })
  if (!modelValue.selectedCountry)
    errors.push({ path: 'selectedCountry', message: 'Required' })
  if (!modelValue.selectedGradeLevel)
    errors.push({ path: 'selectedGradeLevel', message: 'Required' })
  if (!modelValue.selectedBudget)
    errors.push({ path: 'selectedBudget', message: 'Required' })
  return errors
}

export const validateField = (key: keyof FormState, value: any): boolean => {
  switch (key) {
    case 'gpa':
      return /^[0-4](\.[0-9])?$/.test(value.toString())
    case 'selectedCourse':
      return value !== ''
    case 'selectedCountry':
      return value !== ''
    case 'selectedGradeLevel':
      return value !== ''
    case 'selectedBudget':
      return value !== ''
    default:
      return true
  }
}

export const getErrorMessage = (key: keyof FormState): string => {
  switch (key) {
    case 'gpa':
      return 'Invalid GPA. Please enter a number between 0 and 4.'
    case 'selectedCourse':
      return 'Course is required.'
    case 'selectedCountry':
      return 'Country is required.'
    case 'selectedGradeLevel':
      return 'Grade level is required.'
    case 'selectedBudget':
      return 'Budget is required.'
    default:
      return 'Invalid input.'
  }
}
