import React from 'react'
import { Link } from  'gatsby'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import config from '../../config/SiteConfig'
import styles from './footer.module.scss'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const data = useStaticQuery(query)

  return (
    <footer className={styles.footer}>
      <Img fixed={data.logoFooter.childImageSharp.fixed} alt="L'Apéro - Berlin"/>
      <div>
        <br/>
        <p>Visit us : <br/>
        L'Apéro
        Neue Bahnhofstraße 7B<br/>
        Berlin 10245 - Germany<br/>
        Tel :  <a href={`tel:${config.siteTel}`}>{config.siteTel}</a><br/>
        Email : <a href={`mailto:${config.siteEmail}`}>{config.siteEmail}</a></p>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href={config.facebookPageUrl} target="_blank" aria-label="Facebook" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
     
      <span>© 2019 L'Apéro, All right reserved. <Link to="/impressum">Impressum</Link></span>
    </footer>
  )
}

export default Footer


export const query = graphql`
  query IndexQuery {
    
    logoFooter: file(sourceInstanceName: { eq: "images" }, name: { eq: "logoGrisText" }) {
      childImageSharp {
        fixed( width: 110) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  
  }
`

