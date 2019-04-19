import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Container from '../components/Container/Container'
import Img from 'gatsby-image'
import styles from './epicery.module.scss'
import { Fade } from 'react-reveal';
import { graphql } from 'gatsby'

const Epicerie = ({data}) => {
  const postNode = {
    title: `L'épicerie - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`L'épicerie - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="epicerie" customTitle />
      <Container  first>
      
        <h1>L'Epicerie</h1>
      
        <section className = {styles.section}>  <Fade bottom distance='200px'>
          <div className = {styles.imageWrapper}>
           
            <Img fluid={data.imageone.childImageSharp.fluid} className = {styles.image}/>
         
          </div>  </Fade>
          <div className = {styles.content}>
        
            <div>
              <Fade right distance='200px'  >
               <h2>Un lieu atypique</h2>
              </Fade>
              <Fade right distance='200px'  delay={200}>
                <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co  </p>
                <p>orem ipsum and co BLa orem ipsum and co BLa orem ipsum and co BLa </p>
              </Fade>
            </div>

          </div>
        </section>

         <section className = {styles.section}>  <Fade bottom distance='200px'>
          <div className = {styles.imageWrapper}>
           
            <Img fluid={data.imagetwo.childImageSharp.fluid} className = {styles.image}/>
         
          </div>  </Fade>
          <div className = {styles.content}>
        
            <div>
              <Fade left distance='200px'  >
               <h2>Wine & Cheese</h2>
              </Fade>
              <Fade left distance='200px'  delay={200}>
                <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co  </p>
                <p>orem ipsum and co BLa orem ipsum and co BLa orem ipsum and co BLa </p>
              </Fade>
            </div>

          </div>
        </section>

        <section className = {styles.section}>  <Fade bottom distance='200px'>
          <div className = {styles.imageWrapper}>
           
            <Img fluid={data.imagethree.childImageSharp.fluid} className = {styles.image}/>
         
          </div>  </Fade>
          <div className = {styles.content}>
        
            <div>
              <Fade right distance='200px'  >
               <h2>Les bons plans L'Apéro</h2>
              </Fade>
              <Fade right distance='200px'  delay={200}>
                <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co  </p>
                <p>orem ipsum and co BLa orem ipsum and co BLa orem ipsum and co BLa </p>
              </Fade>
            </div>

          </div>
        </section>

           <section className = {styles.section}>  <Fade bottom distance='200px'>
          <div className = {styles.imageWrapper}>
           
            <Img fluid={data.imagefour.childImageSharp.fluid} className = {styles.image}/>
         
          </div>  </Fade>
          <div className = {styles.content}>
        
            <div>
              <Fade left distance='200px'  >
               <h2>Wine & Cheese</h2>
              </Fade>
              <Fade left distance='200px'  delay={200}>
                <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co  </p>
                <p>orem ipsum and co BLa orem ipsum and co BLa orem ipsum and co BLa </p>
              </Fade>
            </div>

          </div>
        </section>

      </Container>
  </Layout>
)
}

export default Epicerie

export const query = graphql`
  query {
    imageone:file(relativePath: { eq: "table.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 746) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imagetwo:file(relativePath: { eq: "presentoir.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 746) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imagethree:file(relativePath: { eq: "fromages.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 746) {
          ...GatsbyImageSharpFluid
        }
      }
    }
     imagefour:file(relativePath: { eq: "apero-hp-4.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 746) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`