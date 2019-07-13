import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
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

const Post = props => {
  let video;
  if (props.post.videoURL !== "") {
    video = (
      <ReactPlayer
        className="video"
        width="100%"
        url={props.post.videoURL}
        controls={true}
      />
    );
  }

  return (
    <div className="post" id={props.post.id}>
      <h3>{props.post.date}</h3>
      <Link to={`/post/${props.post.id}`}>
        <h2>{props.post.title}</h2>
      </Link>
      <p>{props.post.entry}</p>
      <img src={props.post.imageURL} />
      {video}
      <div className="sharebtnContainer">
        <FacebookShareButton className="sharebtn" url={window.location.href}>
          <FacebookIcon size={24} round={true} />
        </FacebookShareButton>
        <TwitterShareButton className="sharebtn" url={window.location.href}>
          <TwitterIcon size={24} round={true} />
        </TwitterShareButton>
        <RedditShareButton className="sharebtn" url={window.location.href}>
          <RedditIcon size={24} round={true} />
        </RedditShareButton>
        <TumblrShareButton className="sharebtn" url={window.location.href}>
          <TumblrIcon size={24} round={true} />
        </TumblrShareButton>
        <EmailShareButton className="sharebtn" url={window.location.href}>
          <EmailIcon size={24} round={true} />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default Post;
