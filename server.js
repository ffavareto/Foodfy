const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('oi')
})

server.listen(3000, () => {
    console.log("Server online on port 6000");
})