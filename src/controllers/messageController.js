const message = require("../models/messageModel");

const getMessage = (req, res) => {
    try {
        const text = message.getMessage();
        res.status(200).json(text);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getMessage,
};
