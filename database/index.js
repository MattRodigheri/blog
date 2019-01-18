var mysql = require('mysql');

var connection = mysql.createConnection({
  user     : 'root',
  database : 'blog'
});


const getPosts = function (data) {
  connection.query('SELECT * FROM posts ORDER BY id DESC', function (err, res) {
    if (err) {
      data(err, null);
    } else {
      data(null, res);
    }
  });
};

const addPost = function (input, callback) {
  connection.query(`INSERT INTO posts (date, title, entry) VALUES ('${input.date}', '${input.title}', '${input.text}');`, function (err, data) {
    if (err) {
      console.log(err);
      callback(err, null);
    }
  });
};

module.exports.getPosts = getPosts;
module.exports.addPost = addPost;
