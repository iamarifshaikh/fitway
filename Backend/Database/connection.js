import mongoose from 'mongoose'

const connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Successfully Connected To MongoDB Server!')
  } catch (error) {
    console.log(error)
  }
}

export default connection
