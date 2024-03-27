import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
  state: () => {
    return {
      count: 0
    }
  },
  actions: {
    increment() {
      this.count++
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})
