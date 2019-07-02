const winston = require("winston");
const session = require("express-session");
const express = require("express");
const app = express();

require("./startup/connect")();
require("./startup/routes")(app);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  winston.info(`Successfully able to connect to MongoDB on port ${port}`)
);
