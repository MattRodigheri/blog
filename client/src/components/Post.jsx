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
    // <div>
    <div className="post" id={props.post.id}>
      <h5>{props.post.date}</h5>
      <Link to={`/${props.post.id}`}>
        <h2>{props.post.title}</h2>
      </Link>
      <p>{props.post.entry}</p>
      <img src={props.post.imageURL} />
      {video}
    </div>

    // </div>
  );
};

export default Post;
