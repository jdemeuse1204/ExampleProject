var express = require('express');
var path = require('path');

var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, function () {
  console.log(`Example app listening on port !`);
});
