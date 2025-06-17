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
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFB300', // Hauptfarbe
          600: '#FFA000',
          700: '#FF8F00',
          800: '#FF6F00',
          900: '#E65100',
          950: '#BF360C',
        },
        brand: {
          dark: '#0F172A',    // Haupt-Hintergrund
          light: '#F5F5F5',   // Flächenhintergrund
        },
        gray: {
          900: '#1E293B',     // Textfarbe
          200: '#E5E7EB',     // Border/Divider
        },
        accent: {
          blue: '#3B82F6',
          green: '#10B981',
          red: '#EF4444',
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
