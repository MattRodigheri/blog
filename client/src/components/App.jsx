import React from 'react';
import axios from 'axios';
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
    this.postPOST = this.postPOST.bind(this);
  }

  componentDidMount() {
    axios.get('/posts')
      .then((response) => {
        this.setState({
          allPosts: response.data
        })
      })
      .catch((error) => {
        console.log(error);
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

  postPOST() {
    axios.post('/posts', {
      date: this.state.postDate,
      title: this.state.postTitle,
      text: this.state.postText
    })
    .then(
      this.componentDidMount()
    )
  }

  render() {
    let post;
    if (this.state.newPost) {
      post = <Post
        savePostTitle={this.savePostTitle}
        savePostText={this.savePostText}
        postDate={this.state.postDate}
        postTitle={this.state.postTitle}
        postText={this.state.postText}
        postPOST={this.postPOST}
      />
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
