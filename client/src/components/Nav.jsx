import React from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import styles from "./../styles/Nav.css";
import auth0Client from "./Auth.jsx";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  signOut() {
    auth0Client.signOut();
    props.history.replace("/");
  }

  render() {
    return (
      <div className="navbar">
        {!auth0Client.isAuthenticated() && (
          <button onClick={auth0Client.signIn}>Sign In</button>
        )}
        <Link className="navLink" to="/">
          Home
        </Link>
        {auth0Client.isAuthenticated() && (
          <div className="loggedIn">
            <Link className="navLink" to="/newpost">
              New Post
            </Link>
            <button
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Nav);
