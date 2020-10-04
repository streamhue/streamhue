import { Schema, Document, Model, model, Types} from 'mongoose'
import { hashPassword, verifyHash } from './password'

const required = true

export interface IUser extends Document {
  name: string
  password: string

  /* instance methods */
  verifyPassword (password: string): Promise<boolean>
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required },
  password: { type: String, required }
})

UserSchema.methods.verifyPassword = async function verifyPassword (this: IUser, password: string) {
  return verifyHash(this.password, password)
}

UserSchema.pre<IUser>('save', async function hashUserPassword (next) {
  if (this.isModified('password')) {
    this.password = await hashPassword(this.password)
  }
  next()
})

export interface IUserModel extends Model<IUser> {
    /* statics */
}

export default model<IUser, IUserModel>('User', UserSchema)
