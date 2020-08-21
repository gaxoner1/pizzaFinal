import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

//loginwithRedirect: after the user is authenticated, you can retrieve the user
//profile with the getUser() method.
//---> can i pass const user = await auth0.getUser() to grab metadata?

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect()}
      variant="success"
      className="btn-margin"
    >
      Sign In
    </Button>
  );
};

export default LoginButton;
