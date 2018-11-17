import React, { Component } from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import { slide as Menu } from 'react-burger-menu';
import { Fade } from 'react-reveal';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import config from '../../../config/SiteConfig';
import styles from './Navigation.module.scss';
import './Headroom.scss';
import Logo from "../../content/logoRouge.jpg"
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
             
                  <img src={Logo} alt="L'apero" width="50px" />
                </Link>
              </span>
            </div>
            <nav className={styles.navigation}>
              <span>
              
                <Link to="#services"  activeClassName="active">L'épicerie</Link>
                <Link to="#references"  activeClassName="active">{config.siteTitle}</Link>
                <Link to="#references"  activeClassName="active">Contact</Link>
                
                <Link to="#impressum"  activeClassName="active">impressum</Link>

              </span>
            </nav>

          </Fade>
        </Headroom>
        <div className={styles.mobileNav}>
          <div className={styles.mobileNavName}>
            <img src={Logo} alt="L'apero" width="50px" />
          </div>
          <div className={styles.menu}>
            <Menu right isOpen={this.state.menuOpen} onStateChange={this.handleStateChange} width="100%">
              <Link to="/" onClick={() => this.closeMenu()}>
                <h1>{config.siteTitle}</h1>
              </Link>
              <Link to="/services" activeClassName="active" onClick={() => this.closeMenu()}>
                Services
              </Link>
              <Link to="/references" activeClassName="active" onClick={() => this.closeMenu()}>
                Références
              </Link>
              <Link to="/contacts" activeClassName="active" onClick={() => this.closeMenu()}>
                Contacts
              </Link>
             <div className={styles.mobileNavSocialMedia}>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
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

