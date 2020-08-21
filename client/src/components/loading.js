import React from "react";
import Spinner from 'react-bootstrap/Spinner'

// <Spinner animation="border" role="status">
//   <span className="sr-only">Loading...</span>
// </Spinner>

const loading =
 "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
