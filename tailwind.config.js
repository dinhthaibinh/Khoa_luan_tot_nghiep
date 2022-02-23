module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      borderColor: theme => ({
        default: theme('color.gray.300', 'currentColor'), 
        'plastic-pink' : '#ff1493',
        'accent-color' : '#f87171',
        'green-14F2E0' : '#14F2E0',
      }),
      backgroundColor: theme => ({
        'plastic-pink' : '#ff1493',
        'green-14F2E0' : '#14F2E0',
        'green-41C8E5' : '#41C8E5',
        'green-6E9EEB' : '#6E9EEB',
        'pink-9A75F0'  : '#9A75F0',
        'pink-C74CF6'  : '#C74CF6',
        'pink-F320FA'  : '#F320FA',
        'accent-color' : '#f87171', 
      }),
      textColor: {
        'plastic-pink' : '#ff1493',
        'accent-color' : '#f87171',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    },
  },
  plugins: [],
}
