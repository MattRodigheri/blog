import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import styles from "./../styles/Nav.css";
import AllPosts from "./AllPosts.jsx";
import NewPost from "./NewPost.jsx";
import auth0Client from "./Auth.jsx";

const Nav = props => {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/");
  };

  return (
    // <Router>
    <div className="navbar">
      <Link to="/">Home</Link>
      {!auth0Client.isAuthenticated() && (
        <button onClick={auth0Client.signIn}>Sign In</button>
      )}
      {auth0Client.isAuthenticated() && (
        <div>
          <Link to="/newpost">New Post</Link>
          <button
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
      <Route exact path="/" component={AllPosts} />
    </div>
  );
};

export default withRouter(Nav);
