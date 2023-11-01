module.exports = (err, req, res, next) => {
    if (err.isOperational) {
        return res
            .status(err.statusCode)
            .json({ status: err.status, message: err.message });
    }
    return res
        .status(500)
        .json({ status: "error", message: "Erro interno no servidor!" });
};
