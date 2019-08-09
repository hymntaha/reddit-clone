import React from 'react';
import './App.css';
import RedditPost from './RedditPost'

function App() {
  return (
    <div className="App">
      <RedditPost title="My buddy's dog saw a moose" comments={100}/>
      <RedditPost title="A cool cat" comments={100}/>
      <RedditPost title="A cool dog" comments={100}/>
      <RedditPost title="A cool snail" comments={100}/>
    </div>
  );
}

export default App;
