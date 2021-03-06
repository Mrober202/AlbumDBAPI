var MongoClient = require("mongodb").MongoClient;

var AlbumQuery = function() {
  this.url = "mongodb://localhost:27017/music_site";
};

AlbumQuery.prototype = {

  all: function(callback) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection("albums");
      collection.find().toArray(function(err, result) {
        callback(result);
      });
    });
  },

  add: function(albumToAdd, callback) {
    MongoClient.connect(this.url, function(err, db) {
      if(db) {
        var collection = db.collection("albums");
        collection.insert(albumToAdd);
        collection.find().toArray(function(err, results) {
          callback(results);
        });
      };
    });
  }
};

module.exports = AlbumQuery;