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
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'aurora-x': {
          '0%,100%': { transform: 'translateX(-10%)' },
          '50%': { transform: 'translateX(10%)' }
        },
        'aurora-y': {
          '0%,100%': { transform: 'translateY(-6%)' },
          '50%': { transform: 'translateY(6%)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
         float: 'float 6s ease-in-out infinite',
        'aurora-x': 'aurora-x 16s ease-in-out infinite',
        'aurora-y': 'aurora-y 24s ease-in-out infinite',
        'spin-slow': 'spin-slow 60s linear infinite'
      },
      backgroundImage: {
        'grid-s': 'linear-gradient(to right, rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.06) 1px, transparent 1px)',
        'grid-s-dark': 'linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)',
      },
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
