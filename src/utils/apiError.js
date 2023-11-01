module.exports = class ApiError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        this.status = statusCode >= 500 ? "error" : "fail";
    }
};
