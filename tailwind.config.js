/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          lavender: '#8B5CF6',
          lavenderLight: '#EDE9FE',
          lavenderBg: '#F5F3FF',
          lavenderDark: '#6D28D9',
          blue: '#38BDF8',
          blueLight: '#E0F2FE',
          blueBg: '#F0F9FF',
          card: '#FFFFFF',
          cardBorder: '#E2E8F0',
          textMain: '#1E1B4B',
          textMuted: '#64748B',
          tagBg: '#F3E8FF',
          tagText: '#7C3AED',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pastel': '0 10px 30px -10px rgba(139, 92, 246, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'pastel-hover': '0 20px 40px -12px rgba(139, 92, 246, 0.22), 0 8px 16px -4px rgba(0, 0, 0, 0.06)',
        'soft': '0 4px 20px -2px rgba(148, 163, 184, 0.15)',
        'glow': '0 0 25px rgba(167, 139, 250, 0.35)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
