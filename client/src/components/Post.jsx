import React from 'react';
import styles from './../styles/Post.css';

const Post = (props) => {
  return (
    <div className='post'>
      <div className='formcontainer'>
        <p>Title</p>
        <input type='textbox' onChange={props.savePostTitle}/>
        <p>Entry</p>
        <textarea onChange={props.savePostText}></textarea>
        <button onClick={() => console.log(props.postTitle)}>Post</button>
      </div>
    </div>
  );
}

export default Post;
