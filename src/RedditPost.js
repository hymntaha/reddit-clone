import React from 'react';

const style = {display:'flex', flexDirection:'column'}

export default () => {
  return (
    <div style={style}>
      <a href="http://google.com">My buddy's dog saw a moose</a>
      <div>
        <p>
          580 Comments
        </p>
        <p>
          Submitted 5 minutes ago
        </p>
      </div>
    </div>
  )
}
