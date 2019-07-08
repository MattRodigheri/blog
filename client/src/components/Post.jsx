import React from "react";
// import styles from "./../styles/App.css";

class Post extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id={this.props.post.id}>
        <div>{this.props.post.date}</div>
        <div>{this.props.post.title}</div>
        <div>{this.props.post.entry}</div>
        <img src={this.props.post.imageURL} />
      </div>
    );
  }
}

export default Post;
