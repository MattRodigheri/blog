import React from "react";
import axios from "axios";
import styles from "./../styles/App.css";
import Post from "./Post.jsx";

class EditPosts extends React.Component {
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

  deletePost(event) {
    axios.delete("/api/posts", {
      data: { id: event.target.previousSibling.id }
    }).then;
    axios
      .get("/api/posts")
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        console.log(error);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const posts = this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <Post post={post} />
          <button onClick={event => this.deletePost(event)}>Delete</button>
        </div>
      );
    });
    return <div>{posts}</div>;
  }
}

export default EditPosts;
