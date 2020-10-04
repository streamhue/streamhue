import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import * as database from './src/services/database'

const mongod = new MongoMemoryServer()

export async function connect () {
  const uri = await mongod.getUri()
  await database.connect(uri)
}

export async function closeDatabase () {
  await mongoose.connection.dropDatabase()
  await mongoose.disconnect()
  await mongod.stop()
}

export async function clearDatabase () {
  await Promise.all(
    Object
      .values(mongoose.connection.collections)
      .map(collection => collection.deleteMany({}))
  )
}
