const groupModel = require("../models/groupModel");

const getGroup = async (req, res) => {
    try {
        const group = await groupModel.getGroup();
        res.status(200).json(group);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getGroup,
};
