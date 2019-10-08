import React, { Component } from "react";
import auth0Client from "./Auth.js";

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace("/");
  }

  render() {
    return <p>No</p>;
  }
}

export default Callback;
