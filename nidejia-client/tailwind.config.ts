import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: '',
  theme: {
    container: {

      center: true,
      padding: '75px',
      screens: {
        "xl": "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      boxShadow: {
        button: '0px 10px 20px 0px #FF935780',
        indicator: '0px 10px 20px 0px #1A143C1A'
      },
      colors: {
        border: '#EDECF2',
        'gray-light': '#F5F6F8',
        placeholder: '#7D7B91',
        separator: {
          DEFAULT: '#C0D1D9',
          foreground: '#696481'
        },
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'gradient-black': '#050211',
        primary: {
          DEFAULT: '#FF9357',
          foreground: '#CADAE0',
        },
        secondary: {
          DEFAULT: '#1A143C',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        subtitle: '#9693A5',
        destructive: {
          DEFAULT: '#FF1515',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config