import plugins from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,vue}",
	],
  theme: {
    colors: {
      'dark-charcoal': '#312E2C',
      'dark-raspberry': '#7A284E',
      'brandy-red': '#854632',
      'wenge-brown': '#5F564D',
      'eggshell': '#F3E5D7',
      'white-coffee': '#E3DDD7',
      'snow': '#FFF7FB',
      'white': '#FFF'
    },
    fontFamily: {
      outfit: ["'Outfit Variable'", "sans-serif"],
      young: ["'Young Serif'", "sans-serif"]
    }
  },
  plugins: [
    plugins(({ addUtilities, theme }) => {
      addUtilities({
        '.heading-l': {
          fontFamily: theme('fontFamily.young'),
          fontSize: '2.5rem',
          lineHeight: '100%',
        },
        '.heading-m': {
          fontFamily: theme('fontFamily.young'),
          fontSize: '1.75rem',
          lineHeight: '100%',
        },
        '.heading-s': {
          fontFamily: theme('fontFamily.outfit'),
          fontSize: '1.25rem',
          lineHeight: '100%',
        },
        '.body': {
          fontFamily: theme('fontFamily.outfit'),
          fontSize: '1rem',
          lineHeight: '150%',
        },
      })
    })
  ],
}

