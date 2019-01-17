import React from 'react';
import styles from './../styles/Nav.css';

const Nav = (props) => {
    return (
      <div className='navbar'>
        <button onClick={() => props.newPost()}>New Post</button>
      </div>
    );
  }

export default Nav;
