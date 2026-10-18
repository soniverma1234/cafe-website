/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm espresso-brown brand scale
        espresso: {
          50: '#F8F1EA',
          100: '#EEDDD0',
          200: '#DCC0AB',
          300: '#C49B7F',
          400: '#A97A5D',
          500: '#8C5F45',
          600: '#6F4632',
          700: '#543425',
          800: '#3B241D',
          900: '#2A1A14',
          950: '#1B100C',
        },
        // Page + section neutrals
        cream: '#FBF6EF',
        latte: '#F3E7D7',
        // Subtle gold accents
        gold: {
          light: '#E3C08D',
          DEFAULT: '#C99B5F',
          dark: '#A87B3F',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(59, 36, 29, 0.18)',
        soft: '0 24px 50px -20px rgba(59, 36, 29, 0.30)',
      },
    },
  },
  plugins: [],
}
