import React from 'react';
import styles from './../styles/Post.css';

const History = (props) => {
  const posts = props.posts.map((post, index) =>
    <div className="historypost" key={index}>
      <p>{post.date}</p>
      <p>{post.title}</p>
      <p>{post.entry}</p>
    </div>
  )

  return (
    <div>
      {posts}
    </div>
  );
}

export default History;
