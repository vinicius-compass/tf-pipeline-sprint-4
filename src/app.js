const express = require("express");
const app = express();
const router = require("./router");

app.use("/", router);
app.set("json spaces", 2);

module.exports = app;
