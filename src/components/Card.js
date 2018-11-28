import React from 'react'
/*import styled from 'styled-components'*/
import { Link } from 'gatsby'
import Img from 'gatsby-image'
/*import Container from './Container/Container'*/
import styles from './Card.module.scss';

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <li /*featured={props.featured} */ className={styles.post}>
      <Link to={`/news/${slug}/`}>
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} className={styles.postImage}/>
        
          <h2  className={styles.title}>{title}</h2>
        <div className = {styles.excerpt}>
        <span>Published:</span> {publishDate}
        <p
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        ></p>
        </div>
      
      </Link>
    </li>
  )
}

export default Card