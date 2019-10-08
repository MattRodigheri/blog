import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Link, NavLink, withRouter } from "react-router-dom";
import auth0Client from "./Auth.js";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    auth0Client.signOut();
    this.props.history.replace("/");
  }

  render() {
    return (
      <div className="navbar">
        {!auth0Client.isAuthenticated() && (
          <button onClick={auth0Client.signIn}>Sign In</button>
        )}
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        {auth0Client.isAuthenticated() && (
          <div className="loggedIn">
            <NavLink className="navLink" to="/newpost">
              New Post
            </NavLink>
            <button onClick={this.signOut}>Sign Out</button>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Nav);
