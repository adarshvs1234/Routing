const displayController = require("../controller/displayController");
const express = require('express');
const middleware = require("../middleware/middleware");
const displayRouter = express.Router()
displayRouter.get('/',displayController.a)
displayRouter.get('/sample',middleware,displayController.b)
displayRouter.get('/sample/num',displayController.c)

module.exports = displayRouter  