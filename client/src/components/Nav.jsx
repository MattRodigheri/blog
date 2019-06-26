import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styles from "./../styles/Nav.css";
import Login from "./Login.jsx";
import AllPosts from "./AllPosts.jsx";
import NewPost from "./NewPost.jsx";

const Nav = props => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="newpost">New Post</Link>
        <Switch>
          <Route exact path="/" component={AllPosts} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/newpost" component={NewPost} />
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
