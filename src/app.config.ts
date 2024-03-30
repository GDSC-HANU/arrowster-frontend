export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'cool',
    strategy: 'override',
    button: {
      color: {
        blue: {
          solid: 'bg-blue-700 text-white hover:bg-blue-800'
        },
        white: {
          outline: 'border border-gray-400 ring-gray-500'
        }
      }
    },
    input: {
      color: {
        white: {
          outline:
            'ring-gray-500 bg-gray-50 border-gray-300 border border-gray-300 bg-gray-50! text-black'
        }
      }
    },
    inputMenu: {
      color: {
        white: {
          outline:
            'ring-gray-500 bg-gray-50 border-gray-300 border border-gray-300 bg-gray-50! text-black'
        }
      }
    },
    slideover: {
      overlay: {
        background: 'bg-black/70 dark:bg-gray-800/75'
      },
      width: 'max-w-[16rem] md:max-w-md'
    }
  }
})
