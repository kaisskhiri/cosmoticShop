const route = require('express').Router()
const AdminControllers = require('../Controllers/AdminControllers')



route.post('/login', AdminControllers.Login)





module.exports = route
