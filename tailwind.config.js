/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chilli: {
          50: '#FDF2F2',
          100: '#FBE6E6',
          200: '#F6C7C7',
          300: '#EE9C9C',
          400: '#E26666',
          500: '#C83838',
          600: '#A42323',
          700: '#7A1717', // Primary Deep Chilli
          800: '#611414',
          900: '#431010',
          DEFAULT: '#7A1717',
        },
        mango: {
          50: '#FDFBEF',
          100: '#FAF5D6',
          200: '#F5E9A4',
          300: '#EED96D',
          400: '#E4C239',
          500: '#D99A16', // Primary Mango / Turmeric
          600: '#B5780F',
          700: '#8E550D',
          800: '#724212',
          DEFAULT: '#D99A16',
        },
        naturalGreen: {
          50: '#F4F7F2',
          100: '#E5EDE0',
          200: '#CADABF',
          300: '#AAC29A',
          400: '#84A570',
          500: '#648850',
          600: '#455A32', // Natural Green
          700: '#354627',
          DEFAULT: '#455A32',
        },
        warmCream: {
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#F8F2E7', // Warm Cream background
          300: '#EFE3CE',
          400: '#E2CFA9',
          DEFAULT: '#F8F2E7',
        },
        darkBrown: {
          50: '#F6F5F4',
          100: '#E6E3E0',
          200: '#C9C3BC',
          300: '#A59C93',
          400: '#766D64',
          500: '#4E463E',
          600: '#373029',
          700: '#211713', // Dark Brown text/headers
          800: '#17100D',
          DEFAULT: '#211713',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '7xl': '80rem', // 1280px container max-width
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(33, 23, 19, 0.04)',
        'card': '0 4px 20px rgba(33, 23, 19, 0.06)',
        'drawer': '-4px 0 25px rgba(33, 23, 19, 0.12)',
        'modal': '0 20px 40px rgba(33, 23, 19, 0.18)',
      }
    },
  },
  plugins: [],
}
