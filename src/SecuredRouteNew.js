import React from "react";
import { Route } from "react-router-dom";
import auth0Client from "./Auth.js";
import NewPost from "./NewPost.js";

function SecuredRouteNew(props) {
  const { component: path } = props;
  return (
    <Route
      path={path}
      render={() => {
        if (!auth0Client.isAuthenticated()) {
          auth0Client.signIn();
          return <div />;
        }
        return <NewPost />;
      }}
    />
  );
}

export default SecuredRouteNew;
