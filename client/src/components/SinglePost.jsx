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

const SinglePost = props => {
  console.log(props);

  // const props.location.postInfo =

  let video;
  if (props.location.postInfo.videoURL !== "") {
    video = (
      <ReactPlayer
        className="video"
        width="100%"
        url={props.location.postInfo.videoURL}
        controls={true}
      />
    );
  }
  return (
    <div className="post" id={props.location.postInfo.id}>
      <h3>{props.location.postInfo.date}</h3>
      <h2>{props.location.postInfo.title}</h2>
      <p>{props.location.postInfo.entry}</p>
      <img src={props.location.postInfo.imageURL} />
      {video}
      <div className="sharebtnContainer">
        {/* TODO: add comments section */}
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

export default SinglePost;
