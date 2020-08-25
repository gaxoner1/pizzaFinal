import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Menu from "./Menu";
import { Loading } from "../../components/loading";
require("dotenv").config();



const SendOrder = () => {
  const [message, setMessage] = useState("");
  const apiUrl = "https://geopizzaapp2020.herokuapp.com"
  //"http://localhost:5000"
  //process.env.REACT_APP_API_URL;

  const { getAccessTokenSilently } = useAuth0();


 const placeOrder = async () => {
     try {
       //SHOULD BE EXPLICIT
       const token = await getAccessTokenSilently({
         audience: 'sample.express-api.com',
         //scope: ([ 'read:messages read:users' ]),
       });
      //It is likely it is an opaque access token and not jwt
      //console.log(`debugg token/ JWT call: ${token}`)
       const response = await fetch(`${apiUrl}/order`,
         {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );
      const responseData = await response.json();
      console.log(`responseData: ${responseData}`)
      setMessage(responseData);
    } catch (error) {
      setMessage(error.message);
    }
  };

  //skipping consent for verifiable first party clients. If your client is
  //hosted on localhost, Auth0 has no reason to believe that it’s truly a 1st party

  return (
      <div>
        <ButtonGroup>
          <Button onClick={placeOrder} variant="primary">
            Place Order
          </Button>
        </ButtonGroup>
        <p>
          {`Order Status: ${JSON.stringify(message, null, 2)}`}
        </p>
        <Menu/>
      </div>
    );
  };

//TEST export default SendOrder;
export default withAuthenticationRequired(SendOrder, {
  onRedirecting: () => <Loading />,
});
