import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import AllPosts from "./AllPosts.jsx";
import Callback from "./Callback.jsx";
import SecuredRoute from "./SecuredRoute.jsx";
import NewPost from "./NewPost.jsx";
import styles from "./../styles/App.css";

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
