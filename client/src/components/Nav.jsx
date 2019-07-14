import React from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import styles from "./../styles/Nav.css";
import AllPosts from "./AllPosts.jsx";
import auth0Client from "./Auth.jsx";

const Nav = props => {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/");
  };

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
          <Link className="navLink" to="/editposts">
            Edit Posts
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
      {/* <Route exact path="/" component={AllPosts} /> */}
    </div>
  );
};

export default withRouter(Nav);
