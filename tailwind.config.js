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
    /* colors: {
      indigo: {
        light: '#b3bcf5',
        DEFAULT: '#5c6ac4',
        dark: '#202e78',
      },
    }, */
    extends: {
      color: {
        inherit: 'inherit',
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
  },
  variants: {},
  plugins: [],
};
