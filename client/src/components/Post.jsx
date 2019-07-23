import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import auth0Client from "./Auth.jsx";
import axios from "axios";
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

  let edit;
  if (auth0Client.isAuthenticated()) {
    edit = (
      <button onClick={() => props.deletePost(props.post.id)}>Delete</button>
    );
  }

  return (
    <div className="post" id={props.post.id}>
      {edit}
      <h5>{props.post.date}</h5>
      <Link to={`/${props.post.id}`}>
        <h2>{props.post.title}</h2>
      </Link>
      <p>{props.post.entry}</p>
      <img src={props.post.imageURL} />
      {video}
    </div>
  );
};

export default Post;
