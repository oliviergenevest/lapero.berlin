import React, { useState } from 'react'
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import Headroom from 'react-headroom'
import { slide as Menu } from 'react-burger-menu'
import { Fade, Flip } from 'react-reveal'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import config from '../../../config/SiteConfig'
import styles from './Navigation.module.scss'
import './Headroom.scss'

const Navigation = () => {
  const [menuOpen,set] = useState(false)
  const handleStateChange = () => set(!menuOpen)
  const data = useStaticQuery(query)
  return (
      <header>
        <Headroom calcHeightOnResize disableInlineStyles>
          <Fade down duration={2000} className={styles.wrapper}>
             <div className={styles.name}>
             <Flip left duration={700} delay={1000}>
              <span>
                <Link to="/">
                  <Img fixed={data.logoNavigation.childImageSharp.fixed} alt="L'Apéro - Berlin"/>
                 
                </Link>
              </span>
              </Flip>
            </div>
            <nav className={styles.navigation}>
              <span>
                <Link to="/epicerie"  activeClassName="active">L'épicerie</Link>
                <Link to="/news" partiallyActive={true} activeClassName="active">News</Link>
                <Link to="/contacts"  activeClassName="active">Contact</Link>
              </span>
            </nav>
          </Fade>
        </Headroom>
        <div className={styles.mobileNav}>
          <div className={styles.mobileNavName}>  
          <Link to="/">
            <Img fixed={data.logoNavigationSmall.childImageSharp.fixed} alt="L'Apéro - Berlin"/>
          </Link>
          </div>
          <div className={styles.menu}>
            <Menu right isOpen={menuOpen} onStateChange={() => handleStateChange} width="100%" >
              <div className={styles.mobileNavIllustration}> 
                <Img fixed={data.logoMobileMenuOpen.childImageSharp.fixed} alt="L'Apéro - Berlin"/>
              </div>
              <div className={styles.mobileNavWrapper}> 
                <Link to="/" onClick={() => handleStateChange}>
                  <h1 >{config.siteTitle}</h1>
                </Link>
                <div>
                <Fade down duration={500} distance = '100px'>
                  <Link to="/epicerie" activeClassName="active" onClick={() => handleStateChange}>L'épicerie
                  </Link>
                 
                  <Link to="/news" activeClassName="active" onClick={() => handleStateChange}>News
                  </Link>
                  
                  <Link to="/contacts" activeClassName="active" onClick={() => handleStateChange}>Contact
                  </Link>
                </Fade>
                </div>
                <div className={styles.mobileNavSocialMedia}>
                  <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://www.twitter.com/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="{config.facebookPageUrl}" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                </div>
              </div>
            
              
            </Menu> 
          </div>
        </div>
      </header>     
    )
}

export default Navigation

export const query = graphql`
  query NavigationQuery {
    
    logoNavigation: file(sourceInstanceName: { eq: "images" }, name: { eq: "logoGris" }) {
      childImageSharp {
        fixed( width: 70) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
     logoMobileMenuOpen: file(sourceInstanceName: { eq: "images" }, name: { eq: "logoGrisText" }) {
      childImageSharp {
        fixed( width: 150) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    logoNavigationSmall: file(sourceInstanceName: { eq: "images" }, name: { eq: "logoGris" }) {
      childImageSharp {
        fixed( width: 50) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }  
  }
`

