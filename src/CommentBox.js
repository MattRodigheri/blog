import React from "react";
import commentBox from "commentbox.io";

class CommentBox extends React.Component {
  componentDidMount() {
    this.removeCommentBox = commentBox(process.env.REACT_APP_COMMENTID);
  }

  componentWillUnmount() {
    this.removeCommentBox();
  }

  render() {
    return <div className="commentbox"></div>;
  }
}

export default CommentBox;
