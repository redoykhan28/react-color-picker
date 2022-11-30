/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#EBEFF3",
          "secondary": "#F87063",
          "info": "#7695EF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
