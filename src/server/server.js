const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const indexController = require("./controllers/index");
const checkinController = require("./controllers/check-in");
const insightsController = require("./controllers/insights");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", indexController);
app.post("/check-in", checkinController);
app.get("/insights", insightsController);

module.exports = app;