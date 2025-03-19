import { type Config } from 'tailwindcss'

const config: Config = {
  content: [ 
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors 
        'bg-primary':   '#0A0C12',  // main dark background
        'bg-secondary': '#13172B',  // slightly lighter dark for cards/sections
        'primary':      '#6C63FF',  // main purple accent
        'primary-light': '#8C84FF', // lighter purple for hover states
        'text-primary': '#FFFFFF',  // main text color
        'text-secondary': '#B8B8B8',// secondary text color
        'highlight':    '#FF5BF0',   // accent highlight color
        'border-dark':  '#1A1F33',   // dark border color
      },
      fontSize: {
        // Custom text sizes
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'h3': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'h5': ['1.25rem', { lineHeight: '1.4' }],
        'h6': ['1.125rem', { lineHeight: '1.4' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.4' }],
        'xs': ['0.75rem', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
}

export default config
