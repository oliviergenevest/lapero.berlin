import React, { Component } from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import { slide as Menu } from 'react-burger-menu';
import { Fade } from 'react-reveal';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import config from '../../../config/SiteConfig';
import styles from './Navigation.module.scss';
import './Headroom.scss';
import Logo from "../../content/logoGris.png"
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    
    return (
    
    
      <header>
        <Headroom calcHeightOnResize disableInlineStyles>
          <Fade down duration={2000} className={styles.wrapper}>
             <div className={styles.name}>
              <span>
                <Link to="/">
             
                  <img src={Logo} alt="L'apero" width="70px" />
                </Link>
              </span>
            </div>
            <nav className={styles.navigation}>
              <span>
              
                <Link to="epicerie"  activeClassName="active">L'épicerie</Link>
                <Link to="news"  activeClassName="active">News</Link>
                <Link to="contacts"  activeClassName="active">Kontakt</Link>
 
           

              </span>
            </nav>

          </Fade>
        </Headroom>
        <div className={styles.mobileNav}>
          <div className={styles.mobileNavName}>  
          <Link to="/">
            <img src={Logo} alt="L'apero" width="50px" />
          </Link>
          </div>
          <div className={styles.menu}>
            <Menu right isOpen={this.state.menuOpen} onStateChange={this.handleStateChange} width="100%">

              <Link to="/" onClick={() => this.closeMenu()}>
                <h1 >{config.siteTitle}</h1>
              </Link>
              <Fade down duration={2000} distance = '100px'>
              <Link to="epicerie" activeClassName="active" onClick={() => this.closeMenu()}>
                L'epicerie
              </Link>
              </Fade>
              <Fade down duration={2000} distance = '100px'>
              <Link to="news" activeClassName="active" onClick={() => this.closeMenu()}>
                News
              </Link>
               </Fade>
              <Fade down duration={2000} distance = '100px'>
              <Link to="contacts" activeClassName="active" onClick={() => this.closeMenu()}>
                Kontakt
              </Link>
               </Fade>
             <div className={styles.mobileNavSocialMedia}>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="{config.facebookPageUrl}" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </div>
            </Menu>
          </div>
        </div>
      </header>
      
    );
  }
}

