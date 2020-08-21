import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "./index";


//Visits to this private routes when unauthenticated will redirect
//back to loading function then back.
const PrivateRoute = ({ component, ...args }) => (
  <Route
    component={ withAuthenticationRequired (component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default PrivateRoute;
