import React from "react";
import moment from "moment";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Dropzone from "react-dropzone";
import request from "superagent";
import keys from "../../../keys.js";
// import styles from "./../styles/Post.css";

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postDate: moment().format("MMMM Do YYYY"),
      postTitle: "",
      postText: "",
      uploadedFileCloudinaryUrl: ""
    };

    this.savePostTitle = this.savePostTitle.bind(this);
    this.savePostText = this.savePostText.bind(this);
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

  makePost() {
    axios
      .post("/api/posts", {
        date: this.state.postDate,
        title: this.state.postTitle,
        text: this.state.postText,
        image: this.state.uploadedFileCloudinaryUrl
      })
      .then(response => {
        console.log(response.status);
      })
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/");
  }

  savePostTitle(event) {
    this.setState({ postTitle: event.target.value });
  }

  savePostText(event) {
    this.setState({ postText: event.target.value });
  }

  render() {
    return (
      <div className="post">
        <div className="formContainer">
          <p>Title</p>
          <input type="textbox" onChange={this.savePostTitle} />
          <p>Entry</p>
          <textarea onChange={this.savePostText} />
          <p>Image(s)</p>
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            accept="image/*"
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => {
              return (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    <p>
                      Try dropping some files here, or click to select files to
                      upload.
                    </p>
                  }
                </div>
              );
            }}
          </Dropzone>
          <div>
            {this.state.uploadedFileCloudinaryUrl === "" ? null : (
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} />
              </div>
            )}
          </div>
          <button onClick={this.makePost}>Post</button>
        </div>
        <div className="bottomBorder" />
      </div>
    );
  }
}

export default withRouter(NewPost);
