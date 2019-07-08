import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Callback from "./Callback.jsx";
import SecuredRouteNew from "./SecuredRouteNew.jsx";
import SecuredRouteEdit from "./SecuredRouteEdit.jsx";
import NewPost from "./NewPost.jsx";
import EditPosts from "./EditPosts.jsx";
import styles from "./../styles/App.css";
// import bolt from "../../../assets/bolt.gif";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          {/* <img className="bolt" src={bolt} /> */}
          <Nav />
          <Route exact path="/callback" component={Callback} />
          <SecuredRouteNew path="/newpost" component={NewPost} />
          <SecuredRouteEdit path="/editposts" component={EditPosts} />
        </div>
      </Router>
    );
  }
}

export default App;
