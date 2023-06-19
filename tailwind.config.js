/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#151F4E',
        'primary-main': '#2B3E9B',
        'primary-light': '#123FD2',
        'secondary': '#838AA9',
        'secondary-dark': '#4B516A',
        'secondary-light': '#a9b1d1',
        'light': '#F3F4F9',
        'text': '#838AA9',
        'disabled': '#DCDFEF'
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        'base-s': ['15px', '22px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        title: ['26px', '34px'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: "class"
}
