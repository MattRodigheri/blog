require("dotenv").config();
const express = require("express");
const app = express();
const controllers = require("./database.js");
const bodyParser = require("body-parser");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 3001;
app.use(favicon(__dirname + "/build/favicon.ico"));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

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

//FIRST ATTEMPT
// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

//SECOND ATTEMPT
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
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

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
