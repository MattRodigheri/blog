import React from "react";
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
import CommentBox from "./CommentBox.js";

class SinglePost extends React.Component {
  constructor() {
    super();

    this.state = {
      postData: {}
    };
  }

  componentDidMount() {
    axios
      .get("/post", { params: { id: this.props.match.params.postId } })
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

    let imageSrc;
    if (this.state.postData.imageURL && this.state.postData.imageURL !== "") {
      imageSrc = this.state.postData.imageURL.split(",").map((image, index) => {
        return <img src={image} alt="url" key={index} />;
      });
    }

    return (
      <div className="postContainer">
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
        <div className="singlePost">
          <h5>{this.state.postData.date}</h5>
          <h2>{this.state.postData.title}</h2>
          <p>{this.state.postData.entry}</p>
          {imageSrc}
          {video}
        </div>
        <CommentBox />
      </div>
    );
  }
}

export default SinglePost;
