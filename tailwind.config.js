/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0F3D2E',
          light: '#1B5A44',
          dark: '#0A2A20',
        },
        ivory: '#F7F5EE',
        charcoal: '#181816',
        brass: {
          DEFAULT: '#B8935A',
          light: '#D4B788',
        },
        sage: '#DCE4DA',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
