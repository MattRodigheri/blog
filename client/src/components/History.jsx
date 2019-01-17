import React from 'react';
import styles from './../styles/History.css';

const History = (props) => {
  const posts = props.posts.map((post, index) =>
    <div key={index} className="oldPost">
      <p className="date">{post.date}</p>
      <p className="title">{post.title}</p>
      <p className="entry">{post.entry}</p>
    </div>
  )

  return (
    <div className="oldPostsContainer">
      <div>{posts}</div>
    </div>
  );
}

export default History;
