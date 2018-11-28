import React from 'react'
import PropTypes from 'prop-types'
/*import config from '../../config/SiteConfig';*/
import Navigation from './Navigation/Navigation.jsx'
import { StaticQuery, graphql } from 'gatsby'
//import PageTransition from 'gatsby-plugin-page-transitions';

//import Header from './header'
import Footer from './footer'
/*import ContactBar from './contactBar'*/

import './layout.scss'



/* import 'typeface-montserrat';
import 'typeface-montserrat-alternates';
console.log(config) */
const Layout = ({ children }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }


    `}
    render={data => (
      <> 
      <Navigation/>
          <main>

          {children}
          </main>
       <Footer/>
   
   

       
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,

}

export default Layout
