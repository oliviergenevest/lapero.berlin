import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import SEO from '../components/SEO'

import Logo from "../content/logoGrisText.png"
import { FaPhone, FaEnvelope } from 'react-icons/fa';
/*import MapLeaflet from "../components/map-leaflet"*/
import { Fade } from 'react-reveal';

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query  HomePage  {
  contentfulHomepage {
    title
    subtitle {
      id
      subtitle
      childMarkdownRemark
      {
        html
      }
    }
    location {
      lon
      lat
    }
    description {
      id
      description
      childMarkdownRemark
      {
        html
      }
    }
    backgroundImage {
      description
      fluid {
        srcSet
      }
    }
  }
}

    `}
    render={({contentfulHomepage}) => (

      	<>
		   <Layout>
		   <SEO/>
			   <Helmet>
	            <title>{`${config.siteTitle}`}</title>
	           </Helmet>
			   <section className='grid-landing container'>

				   <div className='hero'>
				  		
				  		 <div className='hero-item'>
				  		  <Fade up duration={1500}>
				        	<img src={Logo} alt="L'apero" width="auto" />
				      		</Fade>
				      	</div> 
				      	
				      	 
					    <div className='hero-item'>
					      <Fade up duration={1500} delay={1000}>
					      	<h2>{contentfulHomepage.subtitle.subtitle}</h2>
					      	<p ><span className='focus'>Das Beste</span> direkt aus Frankreich</p> 
					      	</Fade>
					      </div>  
					</div>
					
				</section>

				

				<section className="grid-presentation">
				
					


					   <Fade left distance='100px'><div className="img1"></div></Fade>
					  
					   <Fade bottom distance='100px' delay={200}><div className="img2"></div></Fade>
					   <Fade right distance='100px'>
					  <div className="strapline">
					    <blockquote dangerouslySetInnerHTML={{__html:contentfulHomepage.description.childMarkdownRemark.html}}></blockquote>
					  </div>
					  </Fade>
					  
					  <div className="img3"></div>
					  
					  <div className="cta-wrapper">
					    
					    <div className="cta">
					     <Fade bottom distance='100px'  delay={400}>
					      <h1>L 'Apéro</h1>
					      <p>L'Apéro bietet eine Selektion von Weine und Käse aus Frankreich. Täglich können Sie genießen frische Sandwich oder Apéritiffellern mit einem Gläschen Wein.</p>
					      
					      <a className="button" href="epicerie">Découvrir la boutique →</a>
					        </Fade>
					    </div>
					  

					  </div>





				</section>

				<section className="grid-contact">
				<Fade duration={2500} delai={500}>
				<div className="content ">
					<div className="item">
					<h2>Horaires</h2>
						<p>
						<b>Monday to Friday</b> : 11:00 - 20:00 </p>
						<p>
						<b>Saturday</b> : 12:00 - 21:00 </p>
						<p>
						<b>Sunday</b> : closed </p>
					
					</div>
					<div className="item">
					<h2>Kontakt</h2>
					<p><b><FaPhone/> Tel</b> : {config.siteTel}<br/><b><FaEnvelope/> Email</b> : <a href={`mailto:${config.siteEmail}`}>{config.siteEmail}</a></p>
						<p>L'Apéro <br/>Neue Bahnhofstraße 7B <br/>10245 Berlin
						</p>
						
							
					</div>
				</div>
				<div className="content map">
				
				
              <iframe title="map-lapero" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38855.96335066087!2d13.435637108429683!3d52.50633133457384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f90037206a3%3A0x7c8156616e9bc15b!2zbCdBcMOpcm8!5e0!3m2!1sfr!2sde!4v1548946659913" width="100%" height="350" frameBorder="0"  allowFullScreen></iframe>
           
				</div>
				</Fade>
				</section>

		    </Layout>
      	</>
    )}
  />
);

    /* 	<MapLeaflet latitude={contentfulHomepage.location.lat} longitude={contentfulHomepage.location.lon}/>*/

				 
				

export default HomePage;
