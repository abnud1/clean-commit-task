module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
    },
    colors: {
      blue: "#004DFF",
      white: "#ffffff",
      "light-green": "#1DC679",
      gray: "#454545",
      gold: "#FF9F00",
    },
  },
};
