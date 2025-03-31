import type { Config } from 'tailwindcss'
import flowbiteReact from "flowbite-react/plugin/tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ".flowbite-react/class-list.json"
  ],
  theme: {
    extend: {
      keyframes: {
        launch: {
          '0%': { transform: 'rotate(0deg)',
          bottom: '3%'
           },
           '20%': { transform: 'rotate(0deg)'           },
          '50%': { transform: 'rotate(-12deg)' },
          '60%': { transform: 'rotate(-18deg)', bottom: '40%' },
          '70%': { transform: 'rotate(-60deg)', bottom: '30%' },
          '80%': { transform: 'rotate(-90deg)', bottom: '32%' },
          '90%': { transform: 'rotate(4deg)', bottom: '34%' },
          '100%': { transform: 'rotate(0deg)', bottom: '10%' },
        }
      },
      animation: {
        launce: 'launch 6s ease-in-out infinite',
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      fontFamily: {
        'body': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
    'sans': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]
  },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [flowbiteReact,scrollbarHide],
}
export default config