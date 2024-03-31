// src/stores/universityStore.ts
import { defineStore } from 'pinia'
import type { FormState } from '~/types/index'
import { useSupabaseClient } from '#imports'

export const useUniversityStore = defineStore('university', {
  state: () => ({
    formState: null as FormState | null,
    universities: []
  }),
  actions: {
    setFormState(newFormState: FormState) {
      this.formState = newFormState
    },
    async fetchUniversities() {
      console.log(this.formState)

      const client = useSupabaseClient()
      if (!this.formState) return
      const { data, error } = await client
        .from('university')
        .select('*, location:location_id(*)')
        // .filter('gpa', 'gte', this.formState.gpa)
        .filter('type_of_degree', 'eq', this.formState.selectedGradeLevel)
        .filter('tuition_fee', 'lte', this.formState.seletedBudget)
        .filter('location_id', 'eq', this.formState.selectedCountry?.value)
        // .filter('course_category', 'eq', this.formState.selectedCourse)
        .limit(5)

      if (error) {
        console.error(error)
        return
      }

      this.universities = data
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})
