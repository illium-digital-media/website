/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       colors: {
        primary: '#0F172A',
        secondary: '#152037',
        tertiary: '#1A2944',
        primaryDark: '#0B121F'        
      },
      backgroundColor: {
        primary: '#0F172A',
        secondary: '#152037',
        tertiary: '#1A2944',
        primaryDark: '#0B121F'
      },
      borderColor: {
        primary: '#0F172A',
        secondary: '#152037',
        tertiary: '#1A2944',
        primaryDark: '#0B121F'
      },
      boxShadow: {
        'cyan-glow': '0 0 30px rgba(0, 255, 255, 0.7)', 
      },
          scrollSnapType: {
            y: 'scroll-snap-type-y',
          },
          scrollSnapAlign: {
            start: 'scroll-snap-align-start',
          }
    },
  },
  plugins: [],
}
