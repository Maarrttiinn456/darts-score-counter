
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  
  theme: {
    darkMode: 'class',
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
      'red': {
        '50': '#ffefef',
        '100': '#ffdcdc',
        '200': '#ffbfbf',
        '300': '#ff9292',
        '400': '#ff5454',
        '500': '#ff1f1f',
        '600': '#ff0000',
        '700': '#db0000',
        '800': '#b30000',
        '900': '#940808',
        '950': '#520000',
    },

    },
    extend: {
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

