
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    colors: {
      'white': '#fff',
      'black': '#000',
      'primary': {
          '50': '#f3f6fb',
          '100': '#e5e8f4',
          '200': '#d0d8ed',
          '300': '#b0bfe0',
          '400': '#8a9dd0',
          '500': '#6e80c3',
          '600': '#5b68b5',
          '700': '#5058a5',
          '800': '#464a87',
          '900': '#363a62',
          '950': '#282943',
      },
    },
    extend: {
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

