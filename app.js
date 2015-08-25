"use strict";

var express = require('express');
var app = express();

//========================================================//
//   Sets port to environment port or local port          //
//========================================================//

var port = process.env.PORT || '4000';

//========================================================//
//   connecting the client and server                     //
//   allows for CORS (cross origin resource sharing)      //
//========================================================//

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// for more info, see: http://enable-cors.org/server_expressjs.html

//========================================================//
//   statically serves files from the client directory    //
//========================================================//
// This is where our private API is located
app.use(express.static('api'));


// for more info, see: http://expressjs.com/starter/static-files.html

//========================================================//
//   ROUTES                                               //
//========================================================//

// app.get('/', function(req, res) {
//   res.location('/client/index.html');
// });



//========================================================//
//   Calling the server                                   //
//========================================================//
var server = app.listen(port, function() {
  var host = server.address().address;
  console.log('Example app listening at', host, port);
});
