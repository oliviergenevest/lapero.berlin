import Typography from "typography";  
//  import config from '../../config/SiteConfig';
const typography = new Typography({
 title: 'L\'apero',
  baseFontSize: "20px" ,
  baseLineHeight: 1.6,
  headerFontFamily: ['Alegreya', 'serif'],
  bodyFontFamily: ['Karla','sans-serif'],
  scaleRatio: 4,
  googleFonts: [
    {
      name: 'Alegreya',
      styles: ['400'],
    },
    {
     name: 'Karla',
     styles: ['400'],
      
    }
    ],
});  
export default typography;