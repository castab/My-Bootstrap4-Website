import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        heading: ['var(--font-space)', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        ink: '#08111f',
        graphite: '#101827',
        panel: '#121c2d',
        copper: '#e39a5f',
        signal: '#77e4c8'
      },
      boxShadow: {
        glow: '0 0 80px rgba(119, 228, 200, 0.16)'
      }
    }
  },
  plugins: []
}

export default config
