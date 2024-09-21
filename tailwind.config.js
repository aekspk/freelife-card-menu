/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EF7E7C",
        Ake: "#F4F4F4",
      },
      opacity: {
        0: "0",
      },
    },
  },
  plugins: [require("daisyui")],
};
