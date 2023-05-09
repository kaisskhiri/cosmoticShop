const route = require('express').Router()
const UserControllers = require('../Controllers/UserControllers')

route.post('/register', UserControllers.register)
route.post('/login', UserControllers.Login)




module.exports = route
