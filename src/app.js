const express = require("express");
const jokeRoute = require("./routes/jokeRoute");
const taskRoute = require("./routes/taskRoute");
const ApiError = require("./utils/apiError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use("/api/atividades", taskRoute);
app.use("/api/piadas", jokeRoute);
app.get("/", (req, res) => {
    res.status(200).send("Este é o app do Grupo 6");
});

app.all("*", (req, res, next) => {
    return next(new ApiError("Rota não encontrada", 404));
});

app.use(globalErrorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
