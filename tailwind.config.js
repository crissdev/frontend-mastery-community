export default {
  content: [
    'index.html'
  ],
  theme: {
    extend: {
      spacing: {
        70: '17.5rem',
      },
      colors: {
        blue: {
          '600': 'hsl(204,70%,51%)',
          '700': 'hsl(204,70%,46%)'
        },
        pink: {
          '600': 'hsl(329, 61.3%, 49.6%)'
        }
      },
      fontFamily: {
        sans: ['proxima-soft','open-sans','sans-serif'],
        mono: ['"courier new", monospace'],
      },
      boxShadow: {
        'tabitem': '0 2px 0 hsl(204,70%,46%)'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
