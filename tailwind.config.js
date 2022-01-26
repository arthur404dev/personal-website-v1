module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-darkest": "#161926",
        "theme-darker": "#181B28",
        "theme-dark-tone": "rgba(41, 36, 66, 0.4)",
        "theme-dark": "#292442",
        "theme-purple": "#B1B2F3",
        "theme-cyan": "#83EFE1",
        "theme-pink": "#F876F1",
      },
      spacing: {
        base: "5rem",
        sm: "6rem",
        md: "7rem",
        lg: "8rem",
        xl: "9rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        fira: ["Fira Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
