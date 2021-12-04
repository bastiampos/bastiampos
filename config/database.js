import mongoose from 'mongoose'

export default mongoose.connect(process.env.MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
   .then(() => console.log('database connected'))
   .catch(error => console.log(error))