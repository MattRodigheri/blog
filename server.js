const express = require("express");
const app = express();
const controllers = require("./database.js");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

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

app.post("/posts", bodyParser.json(), (req, res) => {
  controllers.addPost(req.body, err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.post("/editpost", bodyParser.json(), (req, res) => {
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

app.listen(3001, () => {
  console.log("listening on port 3001!");
});
