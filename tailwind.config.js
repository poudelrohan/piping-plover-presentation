/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          deepest: '#061525',
          deep: '#0B2340',
          mid: '#163D6A',
          light: '#2A6099',
          bright: '#3A7EC4',
        },
        sand: {
          dark: '#B89A5A',
          DEFAULT: '#D9BC82',
          light: '#EDD9A3',
          pale: '#F5EDDA',
        },
        coral: {
          dark: '#A84F2E',
          DEFAULT: '#D4704A',
          light: '#E8916E',
          pale: '#F5C4AE',
        },
        sky: {
          dawn: '#F2C185',
          blush: '#E8A07A',
          blue: '#8FB8D9',
          pale: '#C8DFF0',
        },
        parchment: '#F4EFE4',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
