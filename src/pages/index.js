import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Logo from "../content/logo-l-apero-text.jpg"


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
				        	<img src={Logo} alt="L'apero" width="auto" />
				      	</div> 
					    <div className='hero-item'>
					      	<div className='text'    dangerouslySetInnerHTML={{__html:contentfulHomepage.subtitle.childMarkdownRemark.html}}></div>
					    
					    </div>  
					</div>
					
				</section>

				

				<section className="grid-presentation">
				
					


					  <div className="img1"></div>
					  
					  <div className="img2"></div>
					  
					  <div className="strapline">
					    <blockquote dangerouslySetInnerHTML={{__html:contentfulHomepage.description.childMarkdownRemark.html}}></blockquote>
					  </div>
					  
					  <div className="img3"></div>
					  
					  <div className="cta-wrapper">
					    
					    <div className="cta">
					      <h1>L 'Apéro</h1>
					      <p>L'épicerie propose un large choix de fromages, charcuterie, vins, pains, croissants et autres produits du terroir pour les amateurs des bons repas !</p>
					      <p>Ouverture le 1er décembre 2018</p>
					      <a className="button" href="index">Découvrir la boutique →</a>
					    </div>
					    
					  </div>





				</section>

				<section className="grid-contact">
				<div className="content ">
					<div className="item">
					<h1 >Horaires</h1>
						<p>LUNDI-VENDREDI : 9h - 19h </p>
								<p>SAMEDI : 9h - 20h </p>
					
					</div>
					<div className="item">
						<p></p>
						<p>Longitude: {contentfulHomepage.location.lon} </p>
						<p>Latitude: {contentfulHomepage.location.lat} </p>
							<p>TEL : +444 550 45 4545</p>
							<p>MAIL : rdv@lapero.berlin</p>
					</div>
				</div>
				<div className="content map">
					<p>MAP</p>
				</div>
				</section>

		    </Layout>
      	</>
    )}
  />
);

export default HomePage;
