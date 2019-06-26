import React from "react";
import axios from "axios";
import styles from "./../styles/App.css";

class AllPosts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [1, 2, 3]
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
      return (
        <div key={index}>
          <div>{post.date}</div>
          <div>{post.title}</div>
          <div>{post.entry}</div>
        </div>
      );
    });

    return <div>{posts}</div>;
  }
}

export default AllPosts;
