import { defineStore } from 'pinia'
import { useSupabaseClient } from '#imports'
import { useFormStateStore } from './form'

export const useUniversityStore = defineStore('university', {
  state: () => ({
    universities: []
  }),
  actions: {
    async fetchUniversities() {
      const formStateStore = useFormStateStore()
      const client = useSupabaseClient()
      if (!formStateStore.formState) return
      const { data, error } = await client
        .from('university')
        .select('*, location:location_id(*)')
        // .filter('gpa', 'gte', this.formState.gpa)
        .filter(
          'type_of_degree',
          'eq',
          formStateStore.formState.selectedGradeLevel
        )
        .filter('tuition_fee', 'lte', formStateStore.formState.selectedBudget)
        .filter(
          'location_id',
          'eq',
          formStateStore.formState.selectedCountry?.value
        )
        // .filter('course_category', 'eq', this.formState.selectedCourse)
        .limit(3)

      if (error) {
        console.error(error)
        return
      }

      this.universities = data
      return data
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})
