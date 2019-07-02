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
      <Link to="/newpost">New Post</Link>
      {!auth0Client.isAuthenticated() && (
        <button onClick={auth0Client.signIn}>Sign In</button>
      )}
      {auth0Client.isAuthenticated() && (
        <div>
          <button
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
      {/* <Switch> */}
      <Route exact path="/" component={AllPosts} />
      {/* <Route exact path="/newpost" component={NewPost} />
        </Switch> */}
    </div>
    // </Router>
  );
};

export default withRouter(Nav);
