import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import { FaPhone, FaEnvelope } from 'react-icons/fa';
/*import MapLeaflet from "../components/map-leaflet"*/
import { Fade } from 'react-reveal';

const Contacts = ({data}) => {
  const postNode = {
    title: `Contacts - ${config.siteTitle}`,
  }

  return (
    <Layout>
     <Helmet>
        <title>{`Kontakt - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contacts" customTitle />

  <Container text first>
    <h1>Kontakt</h1>
    <h2>Nicolas Grognet
GESCHÄFTSFÜHRER</h2>
    <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co </p>
     <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co </p>
    <section className="grid-contact">
        <Fade duration={2500} delai={500}>
        <div className="content ">
          <div className="item">
          <h2>Horaires</h2>
            <p><b>Monday to Friday</b> : 11:00 - 20:00 </p>
            <p>
            <b>Saturday</b> : 12:00 - 21:00 </p>
            <p>
            <b>Sunday</b> : closed </p>
          
          </div>
          <div className="item">
         
          <p><b><FaPhone/> Tel</b> : {config.siteTel}<br/><b><FaEnvelope/> Email</b> : <a href={`mailto:${config.siteEmail}`}>{config.siteEmail}</a></p>
            <p>L'Apéro <br/>Neue Bahnhofstraße 7B <br/>10245 Berlin
            </p>
            
              
          </div>
        </div>
        <div className="content map">
        
        
              <iframe title="map-lapero" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24480.341810529797!2d13.455804519857917!3d52.50162721160397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84ef1234b5a9b%3A0x469cc2c8be9fc488!2sNeue+Bahnhofstra%C3%9Fe+7B%2C+10245+Berlin%2C+Allemagne!5e0!3m2!1sfr!2sfr!4v1543336677643" width="100%" height="350" frameBorder="0"  allowFullScreen></iframe>
            
        </div>
        </Fade>
        </section>
  </Container>
  </Layout>
)
}

export default Contacts