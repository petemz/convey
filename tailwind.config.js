/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1F2258",
        "primary-orange": "#EC1E24"
      },
    },
    screens: {
      // https://tailwindcss.com/docs/screens
      // -sm+
      xl: { min: "1200px" },
      "-xl": { max: "1200px" },

      lg: { min: "950px" },
      "-lg": { max: "950px" },

      md: { min: "750px" },
      "-md": { max: "750px" },

      sm: { min: "576px" },
      "-sm": { max: "576px" },

      xs: { min: "480px" },
      "-xs": { max: "480px" },
    },
  },
  plugins: [],
};