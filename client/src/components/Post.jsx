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

  const deletePost = id => {
    // let test = this.state.posts;
    // this.state.posts.forEach((item, index) => {
    //   if (item.id === Number(event.target.nextSibling.id)) {
    //     test.splice(index, 1);
    //     this.setState({
    //       posts: test
    //     });
    //   }
    // });
    axios
      .delete("/api/posts", {
        data: { id }
      })
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        // console.log(error);
        res.status(500).send(error);
      });
  };

  let edit;
  if (auth0Client.isAuthenticated()) {
    edit = <button onClick={event => deletePost(props.post.id)}>Delete</button>;
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
