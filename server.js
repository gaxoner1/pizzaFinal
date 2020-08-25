const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
//const helmet = require("helmet");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const jwtAuthz = require("express-jwt-authz");
const path = require('path')
require("dotenv").config();



const app = express();

//process.env.PORT for HEROKU DYNAMIC ASSNMT
const port = process.env.PORT || 5000;
//const port = process.env.API_PORT || 5000;
const appOrigin = "https://geopizzaapp2020.herokuapp.com"
//"http://localhost:3000"
//process.env.APP_ORIGIN;
const audience = "sample.express-api.com"
//process.env.AUTH0_AUDIENCE;
const issuer = "https://dev-99jq8v4p.us.auth0.com/"
//process.env.AUTH0_ISSUER;

if (!issuer || !audience) {
  throw new Error("Please make sure that .env is in place and populated");
}
//middleware
app.use(morgan("dev"));
//app.use(helmet());
app.use(cors({ origin: appOrigin }));

const checkJwt = jwt({
  // Dynamically provide a signing key based on the [Key ID]
  //(https://tools.ietf.org/html/rfc7515#section-4.1.4) header parameter ("kid")
  //and the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuer}.well-known/jwks.json`,
  }),
  // Validate the audience and the issuer.
  audience: audience,
  //audience:'https://dev-99jq8v4p.us.auth0.com/api/v2/',
  issuer: issuer,
  algorithms: ["RS256"],
});

//app.use(jwtCheck);


//compare scope with user making call (may handle Insufficient scope 403 err)
//check for the permissions in the permissions array found in the JWT
const checkScopes = jwtAuthz([ 'read:messages read:users' ], options);

app.get('/order', checkJwt, checkScopes, function(req, res) {
  res.json({ message: "Order recieved" });
});

//check if in prod and pass build folder to serve app.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html' )); //pass relative path
  })
}

app.listen(port, () => console.log(`API Server listening on port ${port}`));
