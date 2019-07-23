import React from "react";
import moment from "moment";
import axios from "axios";
// import { withRouter } from "react-router-dom";
import Dropzone from "react-dropzone";
import request from "superagent";
import keys from "../../../keys.js";
import styles from "./../styles/NewPost.css";
import imageIcon from "../../../assets/imageIcon.png";

class EditPost extends React.Component {
  constructor() {
    super();

    this.state = {
      postDate: moment().format("M/D/YY"),
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

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/api/post", { params: { id: this.props.match.params.postId } })
      .then(response => {
        console.log(response.data);
        this.setState({
          postData: response.data[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files
      // uploadedFile: files[0]
    });

    // this.handleImageUpload(files[0]);
    this.handleImageUpload(files);
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
            // multiple={false}
            multiple={true}
          >
            {({ getRootProps, getInputProps }) => {
              return (
                <div className="dropzone" {...getRootProps()}>
                  <input {...getInputProps()} />
                  {<img src={imageIcon} />}
                </div>
              );
            }}
          </Dropzone>
          <div>
            {this.state.uploadedFileCloudinaryUrl === "" ? null : (
              <div>
                <img
                  className="uploadSample"
                  src={this.state.uploadedFileCloudinaryUrl}
                />
              </div>
            )}
          </div>
          <h2>Video URL</h2>
          <input type="text" onChange={this.saveVideoLink} />
          <button onClick={this.makePost}>Re-Post</button>
        </div>
      </div>
    );
  }
}

// export default withRouter(EditPost);
export default EditPost;
