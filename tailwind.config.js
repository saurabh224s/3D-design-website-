// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#0f0f13',
        neon: {
          cyan: '#00f3ff',
          purple: '#b700ff',
          blue: '#0055ff'
        }
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(to right, #00f3ff, #b700ff)',
      }
    },
  },
  plugins: [],
            }

