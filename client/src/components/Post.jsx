import React from "react";
// import styles from "./../styles/App.css";

class Post extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>{this.props.post.date}</div>
        <div>{this.props.post.title}</div>
        <div>{this.props.post.entry}</div>
      </div>
    );
  }
}

export default Post;
