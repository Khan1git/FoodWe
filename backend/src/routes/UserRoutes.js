import express from 'express'
import { check, Login, signupUser } from '../controllers/UserControllers/UserController.js'
import { isAdmin } from '../middlewares/isAdmin.js'

const route = express.Router()

route.post('/sign-up', signupUser)
route.post('/login', Login)
// checking
route.get('/check',isAdmin, check)

export default route