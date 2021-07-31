const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

const flash = require("connect-flash");
const markdown = require("marked");
const csrf = require("csurf");
const sanitizeHTML = require("sanitize-html");

const app = express();

const clientP = mongoose
  .connect(
    // "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
    "mongodb+srv://samrendra:93549354Rocks!@cluster0.cizna.mongodb.net/posts?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((m) => m.connection.getClient());

var mongodbutil = require("./mongodbutil");
var db = mongodbutil.getDb();

mongodbutil.connectToServer(function (err) {
  //app goes online once this callback occurs
  app.use(
    session({
      secret: "foo",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        clientPromise: clientP,
        // dbName: "example-db-mongoose",
        stringify: false,
        autoRemove: "interval",
        autoRemoveInterval: 1,
      }),
    })
  );

  app.use(flash());

  app.use(function (req, res, next) {
    //make markdown function availabale from ejs templates
    res.locals.filterUserHTML = function (content) {
      return sanitizeHTML(markdown(content), {
        allowedTags: [
          "p",
          "br",
          "ul",
          "ol",
          "li",
          "strong",
          "bold",
          "i",
          "em",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
        ],
        allowedAttributes: {},
      });
    };

    //make all errors and success flash messages available from all templates
    res.locals.errors = req.flash("errors");
    res.locals.success = req.flash("success");

    //make current user id available on the req object
    if (req.session.user) {
      req.visitorId = req.session.user._id;
    } else {
      req.visitorId = 0;
    }

    // make user session data available from within view templates
    res.locals.user = req.session.user;
    next();
  });

  const router = require("./router");

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(express.static("public"));
  app.set("views", "views");
  app.set("view engine", "ejs");

  app.use(csrf());

  app.use(function (req, res, next) {
    res.locals.csrfToken = req.csrfToken();
    next();
  });

  app.use("/", router);

  app.use(function (err, req, res, next) {
    if (err) {
      if (err.code == "EBADCSRFTOKEN") {
        req.flash("errors", "cross site request forgery detected.");
        req.session.save(() => res.redirect("/"));
      } else {
        res.render("404");
      }
    }
  });
  app.listen(8080);

  const server = require("http").createServer(app);
  const io = require("socket.io")(server);

  io.use(function (socket, next) {
    sessionOptions(socket.request, socket.request.res, next);
  });

  io.on("connection", function (socket) {
    if (socket.request.session.user) {
      let user = socket.request.session.user;

      socket.emit("welcome", { username: user.username, avatar: user.avatar });

      socket.on("chatMessageFromBrowser", function (data) {
        socket.broadcast.emit("chatMessageFromServer", {
          message: sanitizeHTML(data.message, {
            allowedTags: [],
            allowedAttributes: {},
          }),
          username: user.username,
          avatar: user.avatar,
        });
      });
    }
  });
  module.exports = server;
});

module.exports = app;

// app.use(
//   session({
//     secret: "samrendrasSecret",
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({
//       mongoUrl:
//         "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
//       dbName: "example-db",
//       stringify: false,
//     }),
//     cookie: { maxAge: 1000 * 60 * 15, httpOnly: true },
//   })
// );
