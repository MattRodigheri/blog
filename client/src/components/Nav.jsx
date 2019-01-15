import React from 'react';

const Nav = (props) => {
    return (
      <div>
        <button onClick={() => props.newPost()}>New Post</button>
      </div>
    );
  }

export default Nav;
