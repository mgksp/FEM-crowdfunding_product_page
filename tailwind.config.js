module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
      },
      colors: {
        moderateCyan: "hsl(176, 50%, 47%)",
        darkCyan: "hsl(176, 72%, 28%)",
        darkGray: "hsl(0, 0%, 48%)",
        bodyColor: "hsl(0, 0%, 98%)",
        blackOp25: "rgb(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
