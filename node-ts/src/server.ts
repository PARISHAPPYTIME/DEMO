import express = require('express')
const app:express.Application = express()
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(3010, () => console.log("http://localhost:3010/"))