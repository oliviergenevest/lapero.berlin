import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation/Navigation.jsx'
import { StaticQuery, graphql } from 'gatsby'
//import PageTransition from 'gatsby-plugin-page-transitions';

//import Header from './header'
import Footer from './footer'
/*import ContactBar from './contactBar'*/
import config from '../../config/SiteConfig';


import './layout.css'
/*import 'typeface-montserrat';
import 'typeface-montserrat-alternates';*/
console.log(config)
const Layout = ({ children }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }


    `}
    render={data => (
      <> <Navigation/>
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
