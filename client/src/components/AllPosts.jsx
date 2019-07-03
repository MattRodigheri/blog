import React from "react";
import axios from "axios";
import styles from "./../styles/App.css";
import Post from "./Post.jsx";

class AllPosts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/posts")
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const posts = this.state.posts.map((post, index) => {
      return <Post key={post.id} post={post} />;
    });
    return <div>{posts}</div>;
  }
}

export default AllPosts;
