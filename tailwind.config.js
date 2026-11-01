/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFCF7',
          100: '#F9F4E7',
          200: '#EEDDB8',
          300: '#E0C585',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A48037',
          700: '#7B5C20',
          800: '#553E12',
        },
        espresso: {
          DEFAULT: '#2D1A16',
          400: '#54342E',
          500: '#3D2520',
          600: '#2D1A16',
          700: '#23120E',
          800: '#180B08',
          900: '#0E0604',
        },
        parchment: {
          50: '#FDFCF9',
          DEFAULT: '#FAF5EE',
          100: '#F6EFE3',
          200: '#ECE0CE',
          300: '#DFCEB6',
          400: '#CFB89A',
        },
        'antique-rose': {
          50: '#FAF2F3',
          100: '#F4E3E5',
          200: '#E8C7CB',
          300: '#D9AAB0',
          DEFAULT: '#C98F96',
          500: '#B47179',
          600: '#99535C',
          700: '#793A42',
        },
        sage: {
          50: '#F4F7F3',
          100: '#E7EFE4',
          200: '#CFE0CA',
          400: '#8DAF83',
          500: '#648858',
          DEFAULT: '#4D7041',
          700: '#37522D',
          800: '#23381B',
        },
        // Backwards compatibility with previous palette names
        ivory: {
          DEFAULT: '#FAF5EE',
          50: '#FFFFFF',
          100: '#FAF5EE',
          200: '#F5ECE0',
        },
        blush: {
          DEFAULT: '#F0DADB',
          50: '#FAF2F3',
          100: '#F6E6E8',
          200: '#F0DADB',
        },
        rose: {
          DEFAULT: '#C98F96',
          300: '#D9AAB0',
          400: '#C98F96',
          500: '#B6757D',
          600: '#9C5861',
        },
        chocolate: {
          DEFAULT: '#2D1A16',
          400: '#54342E',
          500: '#3D2520',
          600: '#2D1A16',
        },
        cream: {
          DEFAULT: '#F5ECE0',
          50: '#FCF8F3',
          100: '#F5ECE0',
          200: '#ECE0CE',
        }
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', '"Italiana"', '"Cormorant Garamond"', 'serif'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'nouveau': '0 10px 30px -5px rgba(45, 26, 22, 0.08), 0 0 0 1px rgba(197, 160, 89, 0.25)',
        'nouveau-lg': '0 20px 40px -10px rgba(45, 26, 22, 0.12), 0 0 0 1px rgba(197, 160, 89, 0.4)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
      },
      borderRadius: {
        'arch': '140px 140px 0 0',
        'arch-full': '200px 200px 200px 200px',
      }
    },
  },
  plugins: [],
}
