import React from 'react';
import styles from './RedditPost.css';

export default (props) => {
  return (
    <div className={styles.redditPostContainer}>
      <a href="http://google.com">{props.title}</a>
      <div className={styles.redditPostBottomContainer}>
        <p  className={styles.comments}>
          {props.comments}
        </p>
        <p>
          Submitted 5 minutes ago
        </p>
      </div>
    </div>
  )
}
