const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.use(express.static('assets'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

server.get('/', (req, res) => {
    return res.render('index')
})

server.listen(3000, () => {
    console.log("Server online on port 3000");
})