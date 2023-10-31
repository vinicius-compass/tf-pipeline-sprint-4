const express = require("express");
const groupRoute = require("./routes/groupRoute");
const jokeRoute = require("./routes/jokeRoute");
const taskRoute = require("./routes/taskRoute");

const app = express();

app.use("/api/atividades", taskRoute);
app.use("/api/piadas", jokeRoute);
app.use("/", groupRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
