/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comic: ["ComicNeue"],
      },
      boxShadow: {
        neumorphicOuter:
          "0.3rem 0.3rem 0.6rem var(--greyLight-2),-0.2rem -0.2rem 0.5rem var(--white);",
        neumorphicInner:
          "inset 0.2rem 0.2rem 0.5rem var(--greyLight-2), inset -0.2rem -0.2rem 0.5rem var(--white);",
      },
      colors: {
        primary: "var(--primary);",
        greyDark: "#91a4d3",
      },
    },
  },
  plugins: [],
};
