export default defineAppConfig({
  ui: {
    strategy: 'override',
    button: {
      color: {
        blue: {
          solid: 'bg-blue-700 text-white'
        },
        white: {
          outline: 'border border-gray-400 ring-gray-500'
        }
      }
    }
  }
})
