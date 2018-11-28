import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Container from '../components/Container/Container'

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
  <Container text first>
    <h1>L'Epicerie</h1>
    <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co </p>
     <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co </p>
      <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co </p>
       <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co </p>
        <p>BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co BLa bla bla lorem ipsum and co </p>
  </Container>
  </Layout>
)
}

export default Epicerie