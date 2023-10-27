const express = require('express')
const router  = require('./routes/router')
const path    = require('path')

const app = express();
app.use(router);

// initiate server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Serve is running on https://localhost:${PORT}`);
});