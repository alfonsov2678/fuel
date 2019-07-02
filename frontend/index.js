const express = require("express");
const app = express();
const winston = require("winston");
require(".//startup/connect");
require(".//startup/router")(app);
const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Successfully listening on port ${port}`));
