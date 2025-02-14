import express from 'express'
import { check, Login, signupUser } from '../controllers/UserControllers/UserController.js'

const route = express.Router()

route.post('/sign-up', signupUser)
route.post('/login', Login)

// checking
route.get('/check', check)


export default route