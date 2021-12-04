import mongoose from 'mongoose'
const { Schema, model } = mongoose

const User = model('user', new Schema({
   fistname: { type: String, required: true },
   lastname: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
   registerWith: { type: String, required: true },
   rol: { type: Number, default: 1 }
}))

export default User