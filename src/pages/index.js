import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import SEO from '../components/SEO'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { Fade, Flip } from 'react-reveal'

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
  logoHomepage: file(sourceInstanceName: { eq: "images" }, name: { eq: "logoGrisText" }) {
      childImageSharp {
        fluid( maxWidth: 320) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
 
}

    `}
    render={({contentfulHomepage, logoHomepage}) => (

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
				        	<Img fluid={logoHomepage.childImageSharp.fluid} alt="L'Apéro - Berlin"/>
				      		</Fade>
				      	</div> 
				      	
				      	 
					    <div className='hero-item'>
					   
					      	<Flip left cascade duration={1500}><h2>{contentfulHomepage.subtitle.subtitle}</h2>
					      	</Flip>
					      	<p ><span className='focus'>Das Beste direkt aus Frankreich</span></p> 
					    
					      </div>  
					</div>
					
				</section>

				

				<section className="grid-presentation">
				
					


				
					  
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

				<section className="zone-contact">
				
				<div className="content ">
					<Fade duration={2500} delai={500}>
						<div className="item">
						<h2>Horaires</h2>
							<p>
							<b>Monday to Friday</b> : 12h - 21h <br/>
							<b>Saturday</b> : 14h - 21h <br/>
							<b>Sunday</b> : closed </p>		
						</div>
					</Fade>
					<Fade duration={2500} delai={500}>
						<div className="item">
						<h2>Kontakt</h2>
						<p><b><FaPhone/> Tel</b> : {config.siteTel}<br/><b><FaEnvelope/> Email</b> : <a href={`mailto:${config.siteEmail}`}>{config.siteEmail}</a></p>
							<p>L'Apéro <br/>Neue Bahnhofstraße 7B <br/>10245 Berlin - Germany
							</p>
						</div>
					</Fade>
				</div>
				<div className="map">
				
				
              <iframe title="map-lapero" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24480.341810529797!2d13.455804519857917!3d52.50162721160397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84ef1234b5a9b%3A0x469cc2c8be9fc488!2sNeue+Bahnhofstra%C3%9Fe+7B%2C+10245+Berlin%2C+Allemagne!5e0!3m2!1sfr!2sfr!4v1543336677643" width="100%" height="350" frameBorder="0"  allowFullScreen></iframe>
            
				</div>
				
				</section>

		    </Layout>
      	</>
    )}
  />
);

    /* 	<MapLeaflet latitude={contentfulHomepage.location.lat} longitude={contentfulHomepage.location.lon}/>*/

				 
				

export default HomePage;
