import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth.";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return (
    <Route
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Navigate
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
