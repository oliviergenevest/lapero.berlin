const dotenv = require("dotenv");
const config = require('./config/SiteConfig');

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: 'LAPERO BERLIN',
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    },

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
    
      `gatsby-transformer-remark`,
      `gatsby-plugin-sass`,
    
  ],
}