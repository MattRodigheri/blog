import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Callback from "./Callback.jsx";
import SecuredRouteNew from "./SecuredRouteNew.jsx";
import SecuredRouteEdit from "./SecuredRouteEdit.jsx";
import NewPost from "./NewPost.jsx";
import EditPosts from "./EditPosts.jsx";
import styles from "./../styles/App.css";
import bolt from "../../../assets/bolt.gif";
import logo from "../../../assets/logo.gif";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <main>
          {/* <img className="bolt" src={bolt} /> */}
          <Nav />
          <img className="logo" src={logo} />
          <Route exact path="/callback" component={Callback} />
          <SecuredRouteNew path="/newpost" component={NewPost} />
          <SecuredRouteEdit path="/editposts" component={EditPosts} />
        </main>
      </Router>
    );
  }
}

export default App;
