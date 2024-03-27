import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      minHeight: {
        'screen-home': 'calc(100vh - 78px)'
      },
      colors: {
        blue: {
          700: '#1D4ED8'
        }
      }
    }
  }
}
