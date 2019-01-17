var mysql = require('mysql');

var connection = mysql.createConnection({
  user     : 'root',
  database : 'blog'
});


const getPosts = function (data) {
  connection.query('SELECT * FROM posts', function (error, results) {
    if (error) {
      data(error, null);
    } else {
      data(null, results);
    }
  });
};

// const addPost = function (data) {
//   connection.query(`insert into posts values ('date', 'title', 'entry');`, function (error, results) {
//     if (error) {
//       console.log(error);
//       data(error, null);
//     } else {
//       console.log(results)
//       data(null, results);
//     }
//   });
// };

module.exports.getPosts = getPosts;
// module.exports.addPost = addPost;
