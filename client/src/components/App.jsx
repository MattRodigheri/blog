import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Callback from "./Callback.jsx";
import SecuredRouteNew from "./SecuredRouteNew.jsx";
import SecuredRouteEdit from "./SecuredRouteEdit.jsx";
import NewPost from "./NewPost.jsx";
import EditPosts from "./EditPosts.jsx";
import AllPosts from "./AllPosts.jsx";
import SinglePost from "./SinglePost.jsx";
import styles from "./../styles/App.css";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <main>
          <Nav />
          <Switch>
            <Route exact path="/" component={AllPosts} />
            <Route exact path="/callback" component={Callback} />
            <SecuredRouteNew path="/newpost" component={NewPost} />
            <SecuredRouteEdit path="/editposts" component={EditPosts} />
            <Route exact path="/:postId" component={SinglePost} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
