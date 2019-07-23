import React from "react";
import axios from "axios";
import Post from "./Post.jsx";
import bolt from "../../../assets/pizzabolt.png";
import logo from "../../../assets/logo.gif";
import styles from "./../styles/AllPosts.css";

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
        res.status(500).send(error);
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
      .delete("/api/posts", {
        data: { id }
      })
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
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
          <img className="boltL" src={bolt} />
          <img className="logo" src={logo} />
          <img className="boltR" src={bolt} />
        </div>
        <div>{posts}</div>
      </div>
    );
  }
}

export default AllPosts;
