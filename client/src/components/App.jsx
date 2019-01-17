import React from 'react';
import $ from 'jquery';
import Nav from './Nav.jsx';
import Post from './Post.jsx';
import History from './History.jsx';
import moment from 'moment';
import styles from './../styles/App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      allPosts: [],
      newPost: false,
      postDate: moment().format('MMMM Do YYYY'),
      postTitle: '',
      postText: ''
    }

    this.newPost = this.newPost.bind(this);
    this.savePostTitle = this.savePostTitle.bind(this);
    this.savePostText = this.savePostText.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/posts',
      method: 'GET',
      success: (data) => {
        this.setState({
          allPosts: data
        })
      },
      error: function(err) {
      }
    });
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
        <History posts={this.state.allPosts}/>
      </div>
    )
  }
};

export default App;
