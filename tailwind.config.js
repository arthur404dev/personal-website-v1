module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: "#161926",
        darker: "#181B28",
        dark: "#292442",
        "accent-primary": "#B1B2F3",
        "accent-secondary": "#83EFE1",
        "accent-tertiary": "#F876F1",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        fira: ["Fira Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
