const express = require('express')
const displayRouter = require('./displayRouter')
const route = express()

route.use('/',displayRouter)
module.exports = route