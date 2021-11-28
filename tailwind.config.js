module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: ['dark'],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    typography: (theme) => ({
      dark: {
        css: {
          color: 'white',
        },
      },
    }),
    extend: {
      spacing: {
        '1px': '1px',
      },
    },
  },
  variants: {
    extend: {},
    variants: {
      typography: ['dark'],
      gradientColors: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
