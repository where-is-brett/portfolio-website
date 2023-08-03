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
        'primary': '#222222',
        'bg-primary': '#FAFAFA',
        'bg-secondary': '#F9E864',
        'border': '#222222',
        'border-hover': '#727272',
        'border-selected': '#63ECC0',
        'btn-primary': '#222222',
        'btn-primary-active': '#FFFFFF'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'submit': 'translate-left-to-right 6s linear infinite',
      },
      keyframes: {
        'translate-left-to-right': {
          from: { 'background-position': '0 0' },
          to: { 'background-position': '100% 0' },
        }
      }
    },
  },
  plugins: [],
}