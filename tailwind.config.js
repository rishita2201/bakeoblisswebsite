/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FFF9F3',
          50: '#FFFFFF',
          100: '#FFFDFB',
          200: '#FFF9F3',
          300: '#FDF2E6',
          400: '#F9E6D1',
        },
        blush: {
          DEFAULT: '#F4DDE0',
          50: '#FDF8F9',
          100: '#FAF1F3',
          200: '#F4DDE0',
          300: '#EABEC4',
          400: '#DC9DA6',
        },
        rose: {
          DEFAULT: '#C98F96',
          300: '#D9AAB0',
          400: '#C98F96',
          500: '#B6757D',
          600: '#9C5861',
          700: '#804149',
        },
        chocolate: {
          DEFAULT: '#593B35',
          300: '#8A5D54',
          400: '#724B43',
          500: '#593B35',
          600: '#482E29',
          700: '#38231E',
          800: '#271714',
          900: '#170C0A',
        },
        cream: {
          DEFAULT: '#F8EFE5',
          50: '#FCF8F3',
          100: '#F8EFE5',
          200: '#EFE1D2',
          300: '#E4CFBC',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(89, 59, 53, 0.06), 0 2px 6px -1px rgba(89, 59, 53, 0.04)',
        'soft-lg': '0 12px 30px -4px rgba(89, 59, 53, 0.1), 0 4px 12px -2px rgba(89, 59, 53, 0.06)',
        'soft-xl': '0 20px 40px -6px rgba(89, 59, 53, 0.12), 0 8px 16px -4px rgba(89, 59, 53, 0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
