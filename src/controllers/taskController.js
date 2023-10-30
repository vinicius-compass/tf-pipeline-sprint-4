const taskModel = require("../models/taskModel");

const getTask = async (req, res) => {
    try {
        const task = await taskModel.getTask();
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getTask,
};
