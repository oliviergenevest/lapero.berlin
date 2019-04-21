import Typography from "typography";  
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
//  import config from '../../config/SiteConfig';
const typography = new Typography({
 title: 'L\'apero',
  baseFontSize: "18px" ,
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
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    [MOBILE_MEDIA_QUERY]: {
       // Make baseFontSize on mobile 16px.
       baseFontSize: "16px",
     
   
    },
  })
});  

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}
export default typography;