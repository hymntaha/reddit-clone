import React from 'react';
import './RedditPost.css';

export default () => {
  return (
    <div className='redditPostContainer'>
      <a href="http://google.com">My buddy's dog saw a moose</a>
      <div className="redditPostBottomContainer">
        <p  className="comments">
          580 Comments
        </p>
        <p>
          Submitted 5 minutes ago
        </p>
      </div>
    </div>
  )
}
