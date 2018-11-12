import Typography from "typography";  
import config from '../../config/SiteConfig';
const typography = new Typography({
 title: 'L\'apero',
  baseFontSize: "20px" ,
  baseLineHeight: 1.6,
  headerFontFamily: [config.headerFontFamily, 'cursive'],
  bodyFontFamily: ['Playfair Display','serif'],
  scaleRatio: 6,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['400'],
    },
    {
     name: config.bodyFontFamily,
     styles: ['400'],
      
    }
    ],
});  
export default typography;