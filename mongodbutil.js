var MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

module.exports = {
  connectToServer: function (callback) {
    mongoose
      .connect(
        // process.env.MONGO_URI_DEV,
        process.env.MONGO_UTIL_URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(function (err, client) {
        return callback(err);
      });
  },
};
