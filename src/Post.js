import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
// import auth0Client from "./Auth.jsx";

const Post = props => {
  let video;
  if (props.post.videoURL !== "") {
    video = props.post.videoURL.split(",").map((video, index) => {
      return (
        <ReactPlayer
          key={index}
          className="video"
          width="100%"
          url={video}
          controls={true}
        />
      );
    });
  }

  let edit;
  // if (auth0Client.isAuthenticated()) {
  edit = (
    <div className="editPost">
      <button onClick={() => props.deletePost(props.post.id)}>Delete</button>
      <Link to={`/${props.post.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
  // }

  let imageSrc;
  if (props.post.imageURL) {
    imageSrc = props.post.imageURL.split(",").map((image, index) => {
      return <img src={image} alt="url" key={index} />;
    });
  }

  return (
    <div>
      {edit}
      <div className="post" id={props.post.id}>
        <h5>{props.post.date}</h5>
        <Link to={`/${props.post.id}`}>
          <h2>{props.post.title}</h2>
        </Link>
        <p>{props.post.entry}</p>
        {imageSrc}
        {video}
      </div>
    </div>
  );
};

export default Post;
