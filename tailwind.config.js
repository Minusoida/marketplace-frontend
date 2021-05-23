module.exports = {
  prefix: '',
  // mode: 'jit', Still not working correctly with Angular
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{html,scss,ts}'],
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },

    container: {
      center: true,
      padding: '1.5rem',
    },
    colors: {
      darkbrown: '#211',
      lightblue: '#cfe6f6',
      lightgreen: '#6ebbb5',
      darkgreen: {
        700: '#00807b',
        900: '#006764',
      },
      white: '#ffffff',
      black: '#000000',
      lightgray: '',
    },
  },
  variants: {},
  plugins: [],
};
