import React from "react";
import ReactPlayer from "react-player";
import styles from "./../styles/Post.css";

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
      <div className="post" id={this.props.post.id}>
        <h3>{this.props.post.date}</h3>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.entry}</p>
        <img src={this.props.post.imageURL} />
        {video}
      </div>
    );
  }
}

export default Post;
