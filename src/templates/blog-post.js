import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import Img from 'gatsby-image' 
import Container from '../components/Container/Container'
/*import PageBody from '../components/PageBody'*/

import PostLinks from '../components/PostLinks'
import styles from './blog-post.module.scss'
/*import SEO from '../components/SEO'*/

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    
  } = data.contentfulNews
  const postNode = data.contentfulNews
/*console.log(postNode, slug)*/
  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
    <SEO pagePath={slug} postNode={postNode} postSEO />
      <Helmet>
        

        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
   
     
      <div className={styles.heroImg}>
        <Img
          
          fluid={heroImage.fluid}
          backgroundColor={'#eeeeee'}
          className = {styles.bgImg}
        />
        <h1>{title}</h1>
      </div>
      <Container text >
       
         <span>Published:</span> {publishDate}
        <div
      dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
    ></div>
      <PostLinks previous={previous} next={next} />
      </Container>
    

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulNews(slug: { eq: $slug }) {
      title
      slug
      
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
     
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate