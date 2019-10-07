import React from "react";
import moment from "moment";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Dropzone from "react-dropzone";
import request from "superagent";
import imageIcon from "./assets/imageIcon.png";

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postDate: moment().format("M/D/YY"),
      postTitle: "",
      postText: "",
      uploadedFileCloudinaryUrl: [],
      videoLink: ""
    };

    this.savePostTitle = this.savePostTitle.bind(this);
    this.savePostText = this.savePostText.bind(this);
    this.saveVideoLink = this.saveVideoLink.bind(this);
    this.makePost = this.makePost.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files
    });

    this.state.uploadedFile.forEach(image => {
      this.handleImageUpload(image);
    });
  }

  handleImageUpload(file) {
    let upload;
    upload = request
      .post(process.env.REACT_APP_CLOUDINARYUPLOADURL)
      .field("upload_preset", process.env.REACT_APP_CLOUDINARYUPLOADPRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: [
            ...this.state.uploadedFileCloudinaryUrl,
            response.body.secure_url
          ]
        });
      }
    });
  }

  savePostTitle(event) {
    this.setState({ postTitle: event.target.value.replace(/'/g, "\\'") });
  }

  savePostText(event) {
    this.setState({ postText: event.target.value.replace(/'/g, "\\'") });
  }

  saveVideoLink(event) {
    this.setState({ videoLink: event.target.value });
  }

  makePost() {
    if (this.state.postTitle === "") {
      alert("A title is required");
    } else {
      axios
        .post("/posts", {
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
  }

  render() {
    // TODO: allow multiple images
    // TODO: allow multiple videos
    return (
      <div className="newPost">
        <div className="formContainer">
          <h2>Title</h2>
          <input type="text" onChange={this.savePostTitle} />
          <h2>Entry</h2>
          <textarea onChange={this.savePostText} />
          <h2>Images</h2>
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            accept="image/*"
            multiple={true}
          >
            {({ getRootProps, getInputProps }) => {
              return (
                <div className="dropzone" {...getRootProps()}>
                  <input {...getInputProps()} />
                  {<img src={imageIcon} alt="icon" />}
                </div>
              );
            }}
          </Dropzone>
          <div>
            {this.state.uploadedFileCloudinaryUrl.length === 0
              ? null
              : // <div>
                //   <img
                //     className="uploadSample"
                //     src={this.state.uploadedFileCloudinaryUrl}
                //     alt="upload sample"
                //   />
                // </div>
                this.state.uploadedFileCloudinaryUrl.map((image, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="uploadSample"
                        src={image}
                        alt="upload sample"
                      />
                    </div>
                  );
                })}
          </div>
          <h2>Video URL</h2>
          <input type="text" onChange={this.saveVideoLink} />
          <button onClick={this.makePost}>Post</button>
        </div>
      </div>
    );
  }
}

export default withRouter(NewPost);
