import React from 'react';
import './RedditPost.css';

const style = {}

export default () => {
  return (
    <div style={style}>
      <a href="http://google.com">My buddy's dog saw a moose</a>
      <div style={{display:'flex', flexDirection:'row'}}>
        <p style={{marginRight: 30}}>
          580 Comments
        </p>
        <p>
          Submitted 5 minutes ago
        </p>
      </div>
    </div>
  )
}
