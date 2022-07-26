module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "body-sans": "'Source Sans Pro', 'Segoe UI' , Tahoma, Geneva, Verdana, sans-serif",
        "nav-sans": "'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        "header-serif": "'Crimson Text', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"
      },
      colors: {
        "offwhite": "#f5f5f5",
        "nav-native": "#000",
        "nav-active": "#4c4c4c",
        "nav-text": "#fff",
        "nav-text-active": "#87ceeb"
      }
    },
  },
  plugins: [],
}
