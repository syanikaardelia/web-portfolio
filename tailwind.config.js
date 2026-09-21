/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // royal blue
          700: '#1d4ed8', // cobalt blue
          800: '#1e40af', // deep royal
          900: '#1e3a8a',
          950: '#172554',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        },
        cream: {
          50: '#fdfbf7',
          100: '#f9f6f0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card': '0 10px 30px -5px rgba(30, 58, 138, 0.07)',
        'elevated': '0 20px 40px -15px rgba(30, 58, 138, 0.12)',
      }
    },
  },
  plugins: [],
}
