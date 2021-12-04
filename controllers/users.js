import User from '../models/User.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const authentication = {
   newUser: (req, res) => {
      const { firstname, lastname, email, password, registerWith } = req.body

      let hashedPassword = bcryptjs.hashSync(password)
      const userToAdd = new User({ firstname, lastname, email, password: hashedPassword, registerWith })

      User.findOne({ email: email })
         .then(user => {
            if (user) throw new Error('Email already in use')
            userToAdd.save()
            let userToken = jwt.sign({ ...userToAdd }, process.env.SECRETORKEY)
            res.json({
               success: true,
               user: {
                  fistname: userToAdd.fistname,
                  lastname: userToAdd.lastname,
                  email: userToAdd.email,
                  token: userToken,
                  _id: userToAdd._id
               },
               response: 'You are registered now'
            })
         })
         .catch(error => res.json({ success: false, response: error.message, user: null }))
   },

   userSingIn: (req, res) => {
      const { email, password, flagGoogle } = req.body

      User.findOne({ email: email })
         .then(user => {
            if (!user) throw new Error('Incorrect email or password -e')

            if (user.google && !flagGoogle) throw new Error('You created your account with Google, please sign in with them')

            let passMatch = bcryptjs.compareSync(password, user.password)
            if (!passMatch) throw new Error('Incorrect email or password -p')
            let userToken = jwt.sign({ ...user }, process.env.SECRETORKEY)
            res.json({
               success: true,
               user: {
                  firstname: user.firstname,
                  lastname: user.lastname,
                  email: user.email,
                  token: userToken,
                  _id: user._id
               },
               response: 'You are logged now'
            })
         })
         .catch(error => res.json({ success: false, response: error.message, user: null }))
   },

   verifyToken: (req, res) => {
      res.json({
         success: true,
         user: {
            firstname: req.user.firstame,
            email: req.user.email,
            lastname: req.user.lastname,
            _id: req.user._id
         }
      })
   }
}

export default authentication