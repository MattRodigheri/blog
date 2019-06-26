var express = require("express");
var app = express();
var controllers = require("../database/index.js");
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/../client/dist"));
app.get("/posts", function(req, res) {
  controllers.getPosts((err, data) => {
    if (err) {
      res.status(503).send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/posts", bodyParser.json(), (req, res) => {
  controllers.addPost(req.body, err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000!");
});
