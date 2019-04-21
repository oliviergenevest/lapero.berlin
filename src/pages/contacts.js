import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import config from '../../config/SiteConfig'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import { FaPhone, FaEnvelope } from 'react-icons/fa';
/*import MapLeaflet from "../components/map-leaflet"*/
import { Fade } from 'react-reveal';
import styles from './contacts.module.scss'
const Contacts = () => {
  const postNode = {
    title: `Contacts - ${config.siteTitle}`,
  }

const data = useStaticQuery(query)

  return (
    <Layout>
     <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contacts" customTitle />
      <div className={styles.wrapper}>
       <div className={styles.bgImage}>
        <Img fluid={data.bgImage.childImageSharp.fluid}/>
      </div>
      <Container text first>
        <h1>Contact</h1>
        
        <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co </p>
        <p>Merci :)</p>
      <p>Nicolas Grognet, Geschäftsführer - L'Apéro</p>
        
     <section className="zone-contact" style={{'marginBottom':'2em'}}>
       
        <div className="content ">
         <Fade left duration={800} delai={500}>
          <div className="item">
          <h2>Horaires</h2>
            <p>
              <b>Monday to Friday</b> : 12h - 21h <br/>
              <b>Saturday</b> : 14h - 21h <br/>
              <b>Sunday</b> : closed </p>   
          </div>
          </Fade>
            <Fade right duration={800} delai={500}>
          <div className="item">
          <h2>Contact</h2>
          <p><b><FaPhone/> Tel</b> : {config.siteTel}<br/><b><FaEnvelope/> Email</b> : <a href={`mailto:${config.siteEmail}`}>{config.siteEmail}</a></p>
            <p>L'Apéro <br/>Neue Bahnhofstraße 7B <br/>10245 Berlin - Germany
            </p>
            
              
          </div>
          </Fade>
        </div>
            
     </section>

    </Container>
    </div>
     <Fade bottom duration={800} delai={500}>
          <div className="map">
          
          
              <iframe title="map-lapero" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24480.341810529797!2d13.455804519857917!3d52.50162721160397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84ef1234b5a9b%3A0x469cc2c8be9fc488!2sNeue+Bahnhofstra%C3%9Fe+7B%2C+10245+Berlin%2C+Allemagne!5e0!3m2!1sfr!2sfr!4v1543336677643" width="100%" height="350" frameBorder="0"  allowFullScreen></iframe>
            
        </div>
        </Fade>
  </Layout>
)
}

export default Contacts


export const query = graphql`
  query bgImageQuery {
    
    bgImage: file(sourceInstanceName: { eq: "images" }, name: { eq: "apero-hp-2" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  
  }
`
