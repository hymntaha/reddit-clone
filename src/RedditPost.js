import React from 'react';
import styles from './RedditPost.css';

export default () => {
  return (
    <div className={styles.redditPostContainer}>
      <a href="http://google.com">My buddy's dog saw a moose</a>
      <div className={styles.redditPostBottomContainer}>
        <p  className={styles.comments}>
          580 Comments
        </p>
        <p>
          Submitted 5 minutes ago
        </p>
      </div>
    </div>
  )
}
