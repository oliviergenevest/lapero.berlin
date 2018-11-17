const dotenv = require("dotenv");
const config = require('./config/SiteConfig');

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: 'L APERO BERLIN',
  },
 
 plugins: [
   
     {
      resolve: 'gatsby-remark-external-links',
      options: {
        target: '_blank',
        rel: 'nofollow noopener noreferrer',
      },
    },
    
     {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
       /*omitGoogleFont : `true`,*/
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
      // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-XXXXXXXXX-X",
      },
    },
    
      `gatsby-transformer-remark`,
     `gatsby-plugin-sass`,
  
  
   {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    },
    /*  `gatsby-plugin-react-leaflet-v2`,*/
    
  ],
}