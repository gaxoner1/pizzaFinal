import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Highlight } from "../components";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();

//HERE WE CAN EXTRACT ADDITIONAL FIELDS FROM API CALL TO GOOGLE IDP AND LOAD
//ADDITIONAL DETAILS TO PASS TO METADATA
//RULES VS CALLING IdP unclear here
// const accessToken = await auth0.getTokenSilently();
//   const result = await fetch('https://people.google.com', {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   });
//   const data = await result.json();
//   console.log(data);
// });

  const { name, picture, email } = user;
  const [userMetadata] = useState(null);

  console.log(user)

  return (
    <Container className="mb-5">
       <Row className="align-items-center profile-header mb-5 text-center text-md-left">
         <Col md={2}>
           <img
             src={picture}
             alt="Profile"
             className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
           />
         </Col>
         <Col md>
           <h2>{name}</h2>
           <p className="lead text-muted">{email}</p>
         </Col>
       </Row>
       <Row>
         <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
       </Row>
       <div>

       //TODO if user metadata render here: GENDER & CONNECTIONS

       <h3>User Metadata</h3>
       {userMetadata ? (
         <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
       ) : (
         "No user metadata defined"
       )}
     </div>
     </Container>
   );
 };

 export default Profile;
