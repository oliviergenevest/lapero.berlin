import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/Container/Container'

const NotFoundPage = () => (
  <Layout>
  <Container text first>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
    <Link to='/'>Back to L'apéro !</Link>
    <p><br/></p>
  </Container>
  </Layout>
)

export default NotFoundPage