import React from 'react'
import Link from  'gatsby-link'
import config from '../../config/SiteConfig'

const Footer = () => (
  <footer className="footer">
   <p>2018 © L'apéro - Tel : {config.siteTel} - <Link to="impressum">Impressum</Link></p>
  </footer>
)

export default Footer
