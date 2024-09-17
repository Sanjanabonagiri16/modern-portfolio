module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#800080',
        black: '#000000',
        pastelPink: '#FFD1DC',
        grey: '#808080',
        darkGrey: '#333333',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-main': 'linear-gradient(to right, #800080, #000000)',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  variants: {
    extend: {
      backfaceVisibility: ['hover', 'focus'],
    },
  },
  plugins: [],
}