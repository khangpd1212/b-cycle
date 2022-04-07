module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1537px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md1': { 'max': '800px' },
      'sm1': { 'max': '640px' },
      'sm2': { 'max': '426px' },
      'sm3': { 'max': '376px' },
    }
  },
  plugins: [],
}