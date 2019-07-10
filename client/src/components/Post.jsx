import React from "react";
import ReactPlayer from "react-player";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";
import styles from "./../styles/Post.css";

class Post extends React.Component {
  constructor() {
    super();
  }

  render() {
    let video;
    if (this.props.post.videoURL !== "") {
      video = (
        <ReactPlayer
          className="video"
          width="100%"
          url={this.props.post.videoURL}
          controls={true}
        />
      );
    }
    return (
      <div className="post" id={this.props.post.id}>
        <h3>{this.props.post.date}</h3>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.entry}</p>
        <img src={this.props.post.imageURL} />
        {video}
        <div className="sharebtnContainer">
          <FacebookShareButton className="sharebtn" url={"www.google.com"}>
            <FacebookIcon size={24} round={true} />
          </FacebookShareButton>
          <TwitterShareButton className="sharebtn" url={"www.google.com"}>
            <TwitterIcon size={24} round={true} />
          </TwitterShareButton>
          <RedditShareButton className="sharebtn" url={"www.google.com"}>
            <RedditIcon size={24} round={true} />
          </RedditShareButton>
          <TumblrShareButton className="sharebtn" url={"www.google.com"}>
            <TumblrIcon size={24} round={true} />
          </TumblrShareButton>
          <EmailShareButton className="sharebtn" url={"www.google.com"}>
            <EmailIcon size={24} round={true} />
          </EmailShareButton>
        </div>
      </div>
    );
  }
}

export default Post;
