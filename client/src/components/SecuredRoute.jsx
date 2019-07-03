import React from "react";
import { Route } from "react-router-dom";
import auth0Client from "./Auth.jsx";
import NewPost from "./NewPost.jsx";

function SecuredRoute(props) {
  const { component: Component, path } = props;
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

export default SecuredRoute;
