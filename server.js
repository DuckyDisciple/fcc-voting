//
// # Passport tutorial
//
// Testing out passport with clementine tutorial
//
'use strict';

var express = require('express');
var app = express();
var routes = require("./app/routes/index.js");
var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://"+process.env.IP+":27017/gudetama",function(err,db){
  if(err) throw new Error("Database failed to connect");
  
  app.use('/client', express.static(process.cwd()+"/client"));  
  app.use('/controllers', express.static(process.cwd()+'/app/controllers'));
  
  routes(app, db);
  
  app.listen(process.env.PORT, function(){
    console.log("Listening on port 8080");
  });
  
});
