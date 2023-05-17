/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      red: "hsl(0, 100%, 66%)",
      white: "hsl(0, 0%, 100%)",
      "light-grayish-violet": "hsl(270, 3%, 87%)",
      "dark-grayish-violet": "hsl(279, 6%, 55%)",
      "very-dark-violet": "hsl(278, 68%, 11%)"
    },
    screens:{
      mobile: "375px",
      desktop: "1440px"
    },
    extend: {
      backgroundImage:{
        "gradient-violet": "linear-gradient(to bottom, hsl(249, 99%, 64%), hsl(278, 94%, 30%))"
      },
      fontFamily:{
        "space-grotesk": ['Space Grotesk', 'sans-serif']
      },
      fontWeight:{
        medium: 500
      }
    },
  },
  plugins: [],
}

