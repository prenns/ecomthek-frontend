/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'sans-serif'], // Fallback-Reihenfolge
      },
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1', // Hauptfarbe (Indigo 500)
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#1E1B4B',
        },
        brand: {
          dark: '#0F172A',   // Tiefes Navy für Background/Headers
          light: '#F8FAFC',  // Kühles, helles Grau für Flächen
        },
        gray: {
          900: '#0F172A',    // Fast-Schwarz Text
          700: '#334155',    // Sekundärtext
          400: '#94A3B8',    // Muted
          200: '#E2E8F0',    // Border/Divider
          100: '#F1F5F9',    // Soft BG
        },
        accent: {
          blue: '#3B82F6',
          green: '#10B981',
          red: '#EF4444',
          yellow: '#FACC15',
        },
        accentHover: {
          blue: '#2563EB',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.700'),
              '&:hover': {
                color: theme('colors.primary.800'),
              },
              textDecoration: 'underline',
              fontWeight: '500',
            },
          },
        },
      }),
    },
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography'),
  ],
}
