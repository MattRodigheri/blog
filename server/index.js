const express = require("express");
const app = express();
const controllers = require("../database/index.js");
const bodyParser = require("body-parser");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const keys = require("../keys.js");

app.use(express.static(__dirname + "/../client/dist"));

app.get("/posts", (req, res) => {
  controllers.getPosts((err, data) => {
    if (err) {
      res.status(503).send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/post", (req, res) => {
  controllers.getSinglePost(req.query.id, (err, data) => {
    if (err) {
      res.status(503).send(err);
    } else {
      res.send(data);
    }
  });
});

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${keys.domain}/.well-known/jwks.json`
  }),
  audience: keys.clientID,
  issuer: `https://${keys.domain}/`,
  algorithms: ["RS256"]
});

app.post("/posts", bodyParser.json(), (req, res) => {
  // app.post("/posts", checkJwt, (req, res) => {
  controllers.addPost(req.body, err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.put("/posts", bodyParser.json(), (req, res) => {
  // console.log(req.body);
  controllers.putPost(req.body, err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.delete("/posts", bodyParser.json(), (req, res) => {
  controllers.deletePost(req.body, err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000!");
});
