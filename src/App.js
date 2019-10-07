import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav.js";
import AllPosts from "./AllPosts.js";
import NewPost from "./NewPost.js";
import EditPost from "./EditPost.js";

function App() {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={AllPosts} />
            <Route exact path="/:postId/edit" component={EditPost} />
            <Route exact path="/newpost" component={NewPost} />
            {/* <Route exact path="/callback" component={Callback} /> */}
            {/* <SecuredRouteNew path="/newpost" component={NewPost} />
            <SecuredRouteEdit path="/:postId/edit" component={EditPost} /> */}
            {/* <Route exact path="/:postId" component={SinglePost} /> */}
          </Switch>
        </Router>
      </div>
      <footer />
    </div>
  );
}

export default App;
