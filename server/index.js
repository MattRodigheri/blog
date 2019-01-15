var express = require('express')
var app = express();
var controllers = require('../database/index.js');
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`listening on port ${PORT}!`)});
