var express = require('express');
var app = express();
var albumRouter = express.Router();

var Albums = require('../client/db/albumQuery');
var query = new Albums;

albumRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  })
});

module.exports = albumRouter;