const express = require("express");
const messageRoute = require("./routes/messageRoute");
const jokesRoute = require("./routes/jokesRoute");
const { join } = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));
app.use("/", messageRoute);
app.use("/api/piadas", jokesRoute);

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
