import React from "react";
import ReactPlayer from "react-player";

// import styles from "./../styles/App.css";

class Post extends React.Component {
  constructor() {
    super();
  }

  render() {
    let video;
    if (this.props.post.videoURL !== "") {
      video = <ReactPlayer url={this.props.post.videoURL} />;
    }
    return (
      <div id={this.props.post.id}>
        <div>{this.props.post.date}</div>
        <div>{this.props.post.title}</div>
        <div>{this.props.post.entry}</div>
        <img src={this.props.post.imageURL} />
        {video}
      </div>
    );
  }
}

export default Post;
