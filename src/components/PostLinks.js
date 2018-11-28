import React from 'react'
import { Link } from 'gatsby'
import styles from './PostLinks.module.scss'


const PostLinks = props => {
  return (
    <div className={styles.wrapper}>
      <div  className={styles.box}>
        {props.previous && (
          <Link to={`/news/${props.previous.slug}/`}  className={styles.previousLink}>
            &#8592; Previous event
          </Link>
        )}
        {props.next && (
          <Link to={`/news/${props.next.slug}/`}  className={styles.nextLink}>Next Event &#8594;</Link>
        )}
      </div>
    </div>
  )
}

export default PostLinks