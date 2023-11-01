const taskModel = require("../models/taskModel");
const ApiError = require("../utils/apiError");

const getTask = async (req, res, next) => {
    try {
        const task = await taskModel.getTask();
        return res.status(200).json(task);
    } catch (err) {
        return next(new ApiError("Erro na API remota!", 500));
    }
};

module.exports = {
    getTask,
};
