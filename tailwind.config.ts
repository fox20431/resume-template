import type { Config } from 'tailwindcss'

const config: Config = {
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
      fontFamily: {
        smileySansOblique: ['Smiley Sans Oblique'],
        sourceHanSerifSC: ['Source Han Serif SC'],
        SourceHanSansSC: ['SourceHanSansSC'],
        SourceHanSansHWSC: ['Source Han Sans HW SC']
      },
    },
  },
  plugins: [],
}
export default config
