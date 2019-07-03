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

const addPost = (input, callback) => {
  connection.query(
    `INSERT INTO posts (date, title, entry) VALUES ('${input.date}', '${
      input.title
    }', '${input.text}');`,
    err => {
      if (err) {
        console.log(err);
        callback(err, null);
      }
    }
  );
};

const deletePost = (input, callback) => {
  console.log(input.id);
  connection.query(`DELETE FROM posts WHERE id = ${input.id};`),
    err => {
      if (err) {
        console.log(err);
        callback(err, null);
      }
    };
};

module.exports.getPosts = getPosts;
module.exports.addPost = addPost;
module.exports.deletePost = deletePost;
