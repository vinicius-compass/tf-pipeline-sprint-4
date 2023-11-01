const express = require('express')
const router  = require('./routes/router')
const path    = require('path')

const app = express();
app.use(router);

// initiate server
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});