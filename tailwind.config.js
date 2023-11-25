/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT")
module.exports =withMT({
  
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'headingfont':'30px',
        'subheadingfont':'17px',
        'textfont': '15px', 
        
      },
      
      backgroundColor: {
        'deepfuchsia': '#C054D4', 
        'whitecolor':"#FFFFFF",
        'Darkviolet': '#9900CC'
      },

      textColor: {
        'deepfuchsia': '#C054D4', 
        'Darkviolet': '#9900CC', 
        'whitecolor':"#FFFFFF",
      },
      fontFamily: {
       font:['Nunito','sans-serif']
      },
      
    },
  },
  plugins: [],
});

