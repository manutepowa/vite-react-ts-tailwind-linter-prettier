import animations from "@midudev/tailwind-animations"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1120",
      },
    },
  },
  plugins: [animations],
}
