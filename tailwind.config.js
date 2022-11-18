module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
      ],
  theme: {
    extend: {
        fontFamily: {
            'display': ['Inter', ],
            'body': ['"Open Sans"',],
            'poppins':['Poppins']
          },
          colors: {
            'regal': '#37226C',
          },
    },
  },
  plugins: [],
}
