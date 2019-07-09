import React from "react";
import moment from "moment";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Dropzone from "react-dropzone";
import request from "superagent";
import keys from "../../../keys.js";
import styles from "./../styles/NewPost.css";

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postDate: moment().format("D/M/YY"),
      postTitle: "",
      postText: "",
      uploadedFileCloudinaryUrl: "",
      videoLink: ""
    };

    this.savePostTitle = this.savePostTitle.bind(this);
    this.savePostText = this.savePostText.bind(this);
    this.saveVideoLink = this.saveVideoLink.bind(this);
    this.makePost = this.makePost.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(keys.cloudinaryUploadUrl)
      .field("upload_preset", keys.cloudinaryUploadPreset)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  savePostTitle(event) {
    this.setState({ postTitle: event.target.value });
  }

  savePostText(event) {
    this.setState({ postText: event.target.value });
  }

  saveVideoLink(event) {
    this.setState({ videoLink: event.target.value });
  }

  makePost() {
    axios
      .post("/api/posts", {
        date: this.state.postDate,
        title: this.state.postTitle,
        text: this.state.postText,
        image: this.state.uploadedFileCloudinaryUrl,
        video: this.state.videoLink
      })
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="newPost">
        <div className="formContainer">
          <p>Title</p>
          <input type="textbox" onChange={this.savePostTitle} />
          <p>Entry</p>
          <textarea onChange={this.savePostText} />
          <p>Images</p>
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            accept="image/*"
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => {
              return (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {<p>Drop Files Here</p>}
                </div>
              );
            }}
          </Dropzone>
          <div>
            {this.state.uploadedFileCloudinaryUrl === "" ? null : (
              <div>
                <img src={this.state.uploadedFileCloudinaryUrl} />
              </div>
            )}
          </div>
          <p>Video URL</p>
          <input type="text" onChange={this.saveVideoLink} />
          <button onClick={this.makePost}>Post</button>
        </div>
      </div>
    );
  }
}

export default withRouter(NewPost);
