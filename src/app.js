const express = require("express");
const groupRoute = require("./routes/groupRoute");
const jokeRoute = require("./routes/jokeRoute");
const taskRoute = require("./routes/taskRoute");

const { join } = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/group", groupRoute);
app.use("/api/task", taskRoute);
app.use("/api/joke", jokeRoute);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
