import React from "react";
import { Route } from "react-router-dom";
import auth0Client from "./Auth.js";
import EditPost from "./EditPost.js";

function SecuredRouteEdit(props) {
  const { component: path } = props;
  return (
    <Route
      path={path}
      render={props => {
        if (!auth0Client.isAuthenticated()) {
          auth0Client.signIn();
          return <div />;
        }
        return <EditPost {...props} />;
      }}
    />
  );
}

export default SecuredRouteEdit;
