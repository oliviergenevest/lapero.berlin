import React from 'react'
import Link from  'gatsby-link'
import config from '../../config/SiteConfig'
import styles from './footer.module.scss'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
const Footer = () => (
  <footer className={styles.footer}>
   <span>2018 © L'apéro - Tel : {config.siteTel} - <Link to="impressum">Impressum</Link></span>
    <div className={styles.socialMedia}>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href={config.facebookPageUrl} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </div>
  </footer>
)

export default Footer
