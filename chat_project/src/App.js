import React, {useEffect, useState} from 'react';
import axios from 'axios'

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const newPosts = res.data.data.children.map(obj => {
        setPosts(newPosts);
      });
  }, []);

  return (
    <div>
      <h2>React News!</h2>
      <ul>
        {posts.map(post=> {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

exports default App;
