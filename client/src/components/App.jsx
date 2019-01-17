import React from 'react';
import Nav from './Nav.jsx';
import Post from './Post.jsx';
import moment from 'moment';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      newPost: false,
      postDate: moment().format('MMMM Do YYYY'),
      postTitle: '',
      postText: ''
    }

    this.newPost = this.newPost.bind(this);
    this.savePostTitle = this.savePostTitle.bind(this);
    this.savePostText = this.savePostText.bind(this);
  }

  newPost() {
    this.setState({newPost: true});
  }

  savePostTitle(event) {
    this.setState({postTitle: event.target.value});
  }

  savePostText(event) {
    this.setState({postText: event.target.value});
  }

  render() {
    let post;
    if (this.state.newPost) {
      post = <Post savePostTitle={this.savePostTitle} savePostText={this.savePostText} postTitle={this.state.postTitle}/>
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
