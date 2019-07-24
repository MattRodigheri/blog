var mysql = require("mysql");

var connection = mysql.createConnection({
  user: "root",
  database: "blog"
});

const getPosts = data => {
  connection.query("SELECT * FROM posts ORDER BY id DESC", (err, res) => {
    if (err) {
      data(err, null);
    } else {
      data(null, res);
    }
  });
};

const getSinglePost = (input, data) => {
  connection.query(`SELECT * FROM posts WHERE id=${input}`, (err, res) => {
    if (err) {
      data(err, null);
    } else {
      data(null, res);
    }
  });
};

const addPost = (input, callback) => {
  connection.query(
    `INSERT INTO posts (date, title, entry, imageURL, videoURL) VALUES ('${
      input.date
    }', '${input.title}', '${input.text}', '${input.image}', '${
      input.video
    }');`,
    err => {
      if (err) {
        console.log(err);
        callback(err, null);
      }
    }
  );
};

const putPost = (input, callback) => {
  connection.query(``),
    err => {
      if (err) {
        console.log(err);
      }
    };
};

const deletePost = (input, callback) => {
  // console.log("inputID: ", input.id);
  connection.query(`DELETE FROM posts WHERE id = ${input.id};`),
    err => {
      if (err) {
        console.log(err);
        callback(err, null);
      }
    };
};

module.exports.getPosts = getPosts;
module.exports.getSinglePost = getSinglePost;
module.exports.addPost = addPost;
module.exports.putPost = putPost;
module.exports.deletePost = deletePost;
