import passport from 'passport'
import { Router } from 'express';
const router = Router()

import authentication from '../controllers/users.js'

//autenticacion

router.route('/user/signup').post(authentication.newUser)

router.route('/user/signin').post(authentication.userSingIn)

router.route('/verifytoken').get(passport.authenticate('jwt', { session: false }), authentication.verifyToken)

export default router