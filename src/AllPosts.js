import React from "react";
import axios from "axios";
import Post from "./Post.js";
import bolt from "./assets/pizzabolt.png";
import logo from "./assets/logo.gif";
import { withRouter } from "react-router-dom";

class AllPosts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePost(id) {
    let remainingPosts = this.state.posts;
    this.state.posts.forEach((item, index) => {
      if (item.id === Number(id)) {
        remainingPosts.splice(index, 1);
        this.setState({
          posts: remainingPosts
        });
      }
    });

    axios
      .delete("/posts", {
        data: { id }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          post={post}
          deletePost={() => this.deletePost(post.id)}
        />
      );
    });
    return (
      <div className="allPosts">
        <div className="logoContainer">
          <img className="boltL" src={bolt} alt="left bolt" />
          <img className="logo" src={logo} alt="logo" />
          <img className="boltR" src={bolt} alt="right bolt" />
        </div>
        <div>{posts}</div>
      </div>
    );
  }
}

export default withRouter(AllPosts);
