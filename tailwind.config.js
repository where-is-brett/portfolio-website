/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        bergen: ['var(--font-bergen)'],
        redtone: ['var(--font-redtone)'],
      },
      colors: {
        'primary': '#000000',
        'bg-primary': '#FDF1E7',
        'bg-secondary': '#FFDC71',
        'bg-alternate': '#FEFAF6',
        'border': '#000000',
        'border-hover': '#6E7A72',
        'border-selected': '#9CADA1',
        'btn-primary': '#222222',
        'btn-primary-active': '#FFFFFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        submit: 'translate-left-to-right 6s linear infinite',
      },
      keyframes: {
        'translate-left-to-right': {
          from: { 'background-position': '0 0' },
          to: { 'background-position': '100% 0' },
        },
      },
    },
  },
  plugins: [],
};
