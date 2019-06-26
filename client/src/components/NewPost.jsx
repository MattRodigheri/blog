import React from "react";
import moment from "moment";
import axios from "axios";

// import styles from "./../styles/Post.css";

class NewPost extends React.Component {
  constructor() {
    super();

    this.state = {
      postDate: moment().format("MMMM Do YYYY"),
      postTitle: "",
      postText: ""
    };

    this.savePostTitle = this.savePostTitle.bind(this);
    this.savePostText = this.savePostText.bind(this);
    this.makePost = this.makePost.bind(this);
  }

  makePost() {
    axios
      .post("/posts", {
        date: this.state.postDate,
        title: this.state.postTitle,
        text: this.state.postText
      })
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
  }

  savePostTitle(event) {
    this.setState({ postTitle: event.target.value });
  }

  savePostText(event) {
    this.setState({ postText: event.target.value });
  }

  render() {
    return (
      <div className="post">
        <div className="formContainer">
          <p>Title</p>
          <input type="textbox" onChange={this.savePostTitle} />
          <p>Entry</p>
          <textarea onChange={this.savePostText} />
          <button onClick={this.makePost}>Post</button>
        </div>
        <div className="bottomBorder" />
      </div>
    );
  }
}

export default NewPost;
