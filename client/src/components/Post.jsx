import React from 'react';
import styles from './../styles/Post.css';

const Post = (props) => {
  return (
    <div className='post'>
      <div className='formContainer'>
        <p>Title</p>
        <input type='textbox' onChange={props.savePostTitle}/>
        <p>Entry</p>
        <textarea onChange={props.savePostText}></textarea>
        <button onClick={props.postPOST}>Post</button>
      </div>
      <div className="bottomBorder"></div>
    </div>
  );
}

export default Post;
