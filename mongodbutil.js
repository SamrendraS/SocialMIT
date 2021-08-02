var MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

module.exports = {
  connectToServer: function (callback) {
    // MongoClient.connect(
    //   // "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
    //   "mongodb+srv://samrendra:93549354Rocks!@cluster0.cizna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    //   function (err, client) {
    //     _db = client.db("socialApp");
    //     return callback(err);
    //   }
    // );
    mongoose
      .connect(
        // "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
        "mongodb+srv://samrendra:93549354Rocks!@cluster0.cizna.mongodb.net/posts?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(function (err, client) {
        return callback(err);
      });
    // .then((m) => m.connection.getClient());
  },
};
