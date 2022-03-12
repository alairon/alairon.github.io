module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {
      fontFamily: {
        "body-sans": "'Source Sans Pro','Segoe UI',Tahoma,Geneva,Verdana,sans-serif",
        "nav-sans": "'Raleway','Segoe UI',Tahoma,Geneva,Verdana,sans-serif"
      },
      colors: {
        "nav-native": "#000",
        "nav-active": "#4c4c4c",
        "nav-text": "#fff",
        "nav-text-active": "#87ceeb"
      }
    },
  },
  plugins: [],
}
