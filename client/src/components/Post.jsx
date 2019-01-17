import React from 'react';
import styles from './../styles/Post.css';

const Post = (props) => {
  return (
    <div>
      <input type="textbox" onChange={props.savePostTitle}/>
      <textarea className="block" onChange={props.savePostText}></textarea>
      <button onClick={() => console.log(props.postTitle)}>Post</button>
    </div>
  );
}

export default Post;
