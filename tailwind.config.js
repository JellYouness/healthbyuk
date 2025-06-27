/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(220 15% 85%)',
        input: 'hsl(220 15% 92%)',
        ring: 'hsl(160 60% 50%)',
        background: 'hsl(220 20% 98%)',
        foreground: 'hsl(220 15% 20%)',
        primary: {
          DEFAULT: 'hsl(160 60% 40%)',
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(220 15% 90%)',
          foreground: 'hsl(220 15% 30%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 70% 50%)',
          foreground: 'hsl(0 0% 100%)',
        },
        muted: {
          DEFAULT: 'hsl(220 15% 95%)',
          foreground: 'hsl(220 10% 45%)',
        },
        accent: {
          DEFAULT: 'hsl(340 70% 55%)',
          foreground: 'hsl(0 0% 100%)',
        },
        popover: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(220 15% 20%)',
        },
        card: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(220 15% 20%)',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}