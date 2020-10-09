const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.use(express.static('public'))
server.use(express.static('assets'))

server.set("view engine", "njk")

const dataHome = data.slice(0, 3)

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', (req, res) => {
    return res.render('index')
})

server.get('/about.html', (req, res) => {
    return res.render('about')
})

server.get('/recipes.html', (req, res) => {
    return res.render('recipes', { items: data })
})

server.get('/index.html', (req, res) => {
    return res.render('index', { items: dataHome })
})

server.listen(3000, () => {
    console.log("Server online on port 3000");
})