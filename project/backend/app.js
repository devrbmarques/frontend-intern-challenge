var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// config cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.json({
    "description": "encurta.top api",
    "author": "Robson Borges",
    "status": "ok"
  });
});

// www.encurta.top/aurls
app.get("/urls", function (req, res) {
  var obj = null;

  // Read the file and send to the callback
  fs.readFile('urls.json', handleFile)

  // Write the callback function
  function handleFile(err, data) {
      if (err) throw err
      obj = JSON.parse(data)
      console.log(obj);
      res.json(obj);
      // You can now play with your datas
  }  
});

app.listen(3000, function () {
  console.log("server started on port 8080");
});
