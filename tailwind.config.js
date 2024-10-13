/** @type {import('tailwindcss').Config} */
import daisyui from './node_modules/daisyui'
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["garden"],
  },
}

