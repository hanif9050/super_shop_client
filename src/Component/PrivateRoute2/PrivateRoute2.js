import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { userContext } from "../../App";

const PrivateRoute2 = ({ children, ...rest }) => {
  const [loggedIn, setLoggedIn] = useContext(userContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
