const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const flash = require("connect-flash");
const markdown = require("marked");
const csrf = require("csurf");
const sanitizeHTML = require("sanitize-html");

const app = express();
var mongodbutil = require("./mongodbutil");

app.use(express.static("public"));

mongodbutil.connectToServer(function (err) {
  //app goes online once this callback occurs
  app.use(
    session({
      secret: "SamrendraS",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl:
          "mongodb+srv://samrendra:93549354Rocks!@cluster0.cizna.mongodb.net/",
        dbName: "posts",
        stringify: false,
      }),
    })
  );

  app.use(flash());

  app.use(function (req, res, next) {
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
  const server = app.listen(8080, function () {
    console.log(`Listening on port 8080`);
    console.log(`http://localhost:8080`);
  });

  // Socket setup
  const socket = require("socket.io");
  const io = socket(server);

  const activeUsers = new Set();

  io.on("connection", function (socket) {
    console.log("Made socket connection");

    socket.on("new user", function (data) {
      socket.userId = data;
      activeUsers.add(data);
      io.emit("new user", [...activeUsers]);
    });

    socket.on("disconnect", () => {
      activeUsers.delete(socket.userId);
      io.emit("user disconnected", socket.userId);
    });

    socket.on("chat message", function (data) {
      io.emit("chat message", data);
    });

    socket.on("typing", function (data) {
      socket.broadcast.emit("typing", data);
    });
  });

  module.exports = server;
});

module.exports = app;
