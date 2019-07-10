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
      });
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} post={post} />;
    });
    return (
      <div className="allPosts">
        <div className="logoContainer">
          <img className="boltL" src={bolt} />
          <img className="logo" src={logo} />
          <img className="boltR" src={bolt} />
        </div>
        <div>{posts}</div>
        <footer />
      </div>
    );
  }
}

export default AllPosts;
