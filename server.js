import express from 'express'
import passport from 'passport'
import mongoose from 'mongoose'
import cors from 'cors'
import { config } from 'dotenv'
config()
import './config/passport.js'
import router from './routes/main.js'
import path from 'path'

const app = express()
app.use(passport.initialize());

mongoose.connect(process.env.MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
   .then(() => console.log('MongoDB connected'))
   .catch(error => console.log(error))

app.use(cors())
app.use(express.json())

app.use('/api', router)

// if (process.env.NODE_ENV === 'production') {
//    app.use(express.static('client/build'))
//    app.get('*', (req, res) => res.sendFile(path.join(_dirname + '/client/build/index.html')))
// }

const port = process.env.PORT || 4000
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => console.log(`Server listening on port ${port}`))