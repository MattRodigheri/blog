import React from 'react';
import Nav from './Nav.jsx';
import Post from './Post.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newPost: false
    }
    this.newPost = this.newPost.bind(this)
  }

  newPost() {
    this.setState({newPost: true})
  }

  render() {
    let post;
    if (this.state.newPost) {
      post = <Post />
    }
    return (
      <div>
        <Nav newPost={this.newPost} />
        {post}
      </div>
    )
  }
};

export default App;
