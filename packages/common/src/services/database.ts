import mongoose from 'mongoose'

export async function connect (url: string) {
  const db = await mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })

  return db
}
