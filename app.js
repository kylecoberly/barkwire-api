var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");

var dogs = require("./routes/dogs");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/dogs", dogs);

app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
