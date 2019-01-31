import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../../config/SiteConfig'

const PostListTemplate = ({ data, pageContext }) => {
  const posts = data.allContentfulNews.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1
  const postNode = {
      title: `News - ${config.siteTitle}`,
    }

  return (
    <Layout>
   <SEO postNode={postNode} pagePath="news" customTitle />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Container first>
        {isFirstPage ? (
        <> <Helmet>
            <title>{`News - ${config.siteTitle}`}</title>
            </Helmet>
          <h1>News</h1>
          <CardList>
            <Card {...featuredPost} featured />
            {posts.slice(1).map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        </>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <Card key={post.id} {...post} />
            ))}
          </CardList>
        )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulNews(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default PostListTemplate