import React from "react";
import axios from "axios";
import Post from "./Post.jsx";
import styles from "./../styles/EditPosts.css";

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
    // console.log(event.target.nextSibling.id);
    axios.delete("/api/posts", {
      data: { id: event.target.nextSibling.id }
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
        <div className="editPosts" key={index}>
          <button onClick={event => this.deletePost(event)}>Delete</button>
          <Post post={post} />
        </div>
      );
    });
    return <div>{posts}</div>;
  }
}

export default EditPosts;
