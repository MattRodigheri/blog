import React from "react";
import moment from "moment";
import axios from "axios";
import Dropzone from "react-dropzone";
import request from "superagent";
import { withRouter } from "react-router-dom";
import imageIcon from "./assets/imageIcon.png";

class EditPost extends React.Component {
  constructor() {
    super();

    this.state = {
      postID: 0,
      postDate: moment().format("M/D/YY"),
      postTitle: "",
      postText: "",
      imageURL: [],
      videoLink: "",
      uploadedFileCloudinaryUrl: ""
    };

    this.savePostTitle = this.savePostTitle.bind(this);
    this.savePostText = this.savePostText.bind(this);
    this.saveVideoLink = this.saveVideoLink.bind(this);
    this.putPost = this.putPost.bind(this);
  }

  componentDidMount() {
    axios
      .get("/post", { params: { id: this.props.match.params.postId } })
      .then(response => {
        this.setState({
          postID: response.data[0].id,
          postDate: response.data[0].date,
          postTitle: response.data[0].title,
          postText: response.data[0].entry,
          imageURL: response.data[0].imageURL.split(","),
          videoLink: response.data[0].videoURL
        });
      })
      .catch(error => {
        console.log(error);
      });
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

  putPost() {
    axios
      .post("/editpost", {
        id: this.state.postID,
        title: this.state.postTitle,
        entry: this.state.postText,
        imageURL: this.state.uploadedFileCloudinaryUrl,
        videoURL: this.state.videoLink
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
    let image;
    if (this.state.uploadedFileCloudinaryUrl !== "") {
      image = this.state.uploadedFileCloudinaryUrl;
    } else {
      image = this.state.imageURL;
    }

    let imageSample;
    if (image[0] !== "") {
      imageSample = image.map((item, index) => {
        return (
          <div key={index}>
            <img className="uploadSample" src={item} alt="upload sample" />
          </div>
        );
      });
    } else {
      imageSample = <div></div>;
    }

    return (
      <div className="newPost">
        <div className="formContainer">
          <h2>Title</h2>
          <input
            type="text"
            onChange={this.savePostTitle}
            defaultValue={this.state.postTitle}
          />
          <h2>Entry</h2>
          <textarea onChange={this.savePostText} value={this.state.postText} />

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
          <div>{imageSample}</div>
          <h2>Video URL</h2>
          <input
            type="text"
            onChange={this.saveVideoLink}
            defaultValue={this.state.videoLink}
          />
          <button onClick={this.putPost}>Re-Post</button>
        </div>
      </div>
    );
  }
}

export default withRouter(EditPost);
