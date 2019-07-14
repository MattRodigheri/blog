import React from "react";
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
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
import styles from "./../styles/SinglePost.css";

class SinglePost extends React.Component {
  constructor() {
    super();

    this.state = {
      postData: {}
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    axios
      .get("/api/post", { params: { id: this.props.match.params.postId } })
      .then(response => {
        this.setState({
          postData: response.data[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let video;
    if (this.state.postData.videoURL !== "") {
      video = (
        <ReactPlayer
          className="video"
          width="100%"
          url={this.state.postData.videoURL}
          controls={true}
        />
      );
    }
    return (
      <div className="postBackground">
        <div className="spacer" />
        <div className="post">
          <h3>{this.state.postData.date}</h3>
          <h2>{this.state.postData.title}</h2>
          <p>{this.state.postData.entry}</p>
          <img src={this.state.postData.imageURL} />
          {video}
          <div className="sharebtnContainer">
            {/* TODO: add comments section */}
            <FacebookShareButton
              className="sharebtn"
              url={window.location.href}
            >
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
      </div>
    );
  }
}

export default SinglePost;
