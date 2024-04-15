/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1200px" },
      md: { max: "700px" },
      sm: { max: "600px" },
      xm: { max: "520px" },
      mb: { max: "430px" },
    },
    extend: {
      colors: {
        Orange: {
          pale: "hsl(25, 100%, 94%);",
          default: "hsl(26, 100%, 55%)",
        },
        blue: {
          100: "hsl(220, 13%, 13%)",
          90: "hsl(219, 9%, 45%)",
          80: " hsl(220, 14%, 75%)",
          70: " hsl(223, 64%, 98%)",
        },
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
      },
      borderRadius: {
        default: "5px",
        circle: "50%",
      },
    },
  },
  plugins: [],
};
