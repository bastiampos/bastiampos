import passport from 'passport'
import 'dotenv/config'
import { Strategy as jwtStrategy } from 'passport-jwt'
import { ExtractJwt as extractJwt } from 'passport-jwt'
import User from '../models/User.js'

export default passport.use(new jwtStrategy({
   jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: process.env.SECRETORKEY
}, (payload, done) => {
   User.findOne({ _id: payload._doc._id })
      .then(res => { if (!res) { return done(null, false) } else { return done(null, res) } })
      .catch(error => done(error, false))
}
))
