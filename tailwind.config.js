const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ice: '#e8ebf5',
        navy: '#18222e',
        dark: '#252832',
        darker: '#1e2028',
        darkest: '#1a1c23',
        light: '#f2f4f7',
        lighter: '#f7f7f7',
        lightest: '#fcfcfc',
        primary: '#173b6c',
        secondary: '#149ddd',
        tertiary: '#9f7aea',
        'primary-light': '#2e4f7b',
        'secondary-light': '#2ca7e0',
        'tertiary-light': '#a481eb',
      },
      maxWidth: {
        screen: '100vw',
        '8xl': '88rem',
        '9xl': '96rem',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      fontFamily: {
        flow: 'Flow',
        prose: ['Inter', ...defaultTheme.fontFamily.sans],
        headings: ['Poppins'],
      },
    },
  },
  plugins: [],
}
