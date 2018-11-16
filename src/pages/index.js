import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Logo from "../content/logo-l-apero-text.jpg"
import MapLeaflet from "../components/map-leaflet"
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
					      	<p>Ouverture le 1er décembre 2018</p> 
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
					      <p>L'épicerie propose un large choix de fromages, charcuterie, vins, pains, croissants et autres produits du terroir pour les amateurs des bons repas !</p>
					      <p>Ouverture le 1er décembre 2018</p>
					      <a className="button" href="index">Découvrir la boutique →</a>
					        </Fade>
					    </div>
					  

					  </div>





				</section>

				<section className="grid-contact">
				<Fade duration={2500} delai={500}>
				<div className="content ">
					<div className="item">
					<h2>Horaires</h2>
						<p><b>Monday to Friday</b> : 9am - 7pm 
						<br/>
						<b>Saturday</b> : 9am - 8pm </p>
					
					</div>
					<div className="item">
					<h2>Contact</h2>
					<p><b>Tel</b> : +444 550 45 4545<br/><b>Email</b> : rdv@lapero.berlin</p>
						<p>L'Apéro <br/>adresse adresse<br/> - 12054 BERLIN
						</p>
						
							
					</div>
				</div>
				<div className="content map">
					<MapLeaflet latitude={contentfulHomepage.location.lat} longitude={contentfulHomepage.location.lon}/>
				
				</div>
				</Fade>
				</section>

		    </Layout>
      	</>
    )}
  />
);

export default HomePage;
