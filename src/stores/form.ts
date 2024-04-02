import { defineStore } from 'pinia'
import type { FormState } from '@/types'
export const useFormStateStore = defineStore('formState', {
  state: () => ({
    formState: null as FormState | null
  }),
  actions: {
    setFormState(newFormState: FormState) {
      this.formState = newFormState
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})
