# pizzaFinal

App created with React Node Express and Auth0

![Pizza Home](assets/PizzaHome.png)
![Pizza Order](assets/PizzaOrder.png)

## Hosted Version

https://geopizzaapp2020.herokuapp.com/
Note: Due to Content Security Policy in modern browsers, rendering scripts or URLs from 3rd parties (React scripts, boot strap style sheets, APIs, etc) may cause an error.

More Info:
https://developers.google.com/web/fundamentals/security/csp

## Get Started

Install the client project dependencies on both React Frontend (Client) & NodeJS backend (server in root).

```bash
npm init
```

```bash
cd client && npm init
```

Run the client project:

```bash
npm start
```

Run the server project:

```bash
cd server/server.js && node server.js
```

### Prod to Local Environment Changes

API is from production domain; For local environments the API call to the URL should be changed to localhost (ie. http://localhost:5000/ for server)

### Dependencies

@auth0/auth0-react
react
react-bootstrap
react-dom
react-router-dom
react-scripts
react-syntax-highlighter
