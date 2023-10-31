const express = require('express')
const router = require('./routes/router')
const app = express()

app.use(router)

app.listen(8000, () => {
    console.log('Server listening PORT 8000')
})