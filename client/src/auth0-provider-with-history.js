import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-99jq8v4p.us.auth0.com"
  //process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = "YJf7yDFIzxje3UNtEYih2sa54Vgg6OPX"
  //process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = "sample.express-api.com"
  //process.env.AUTH0_AUDIENCE

  const history = useHistory();

  //TODO: Look into this:
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

//pass props to reactDom >> App root
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
      //scope="openid profile email gender"

    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
