import React from "react";
import moment from "moment";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./../styles/App.css";
import Nav from "./Nav.jsx";
import AllPosts from "./AllPosts.jsx";
import Callback from "../Callback.js";
import SecuredRoute from "./../SecuredRoute/SecuredRoute.js";
import NewPost from "./NewPost.jsx";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/callback" component={Callback} />
          <SecuredRoute path="/newpost" component={NewPost} />
        </div>
      </Router>
    );
  }
}

export default App;
