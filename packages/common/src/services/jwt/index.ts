import jwt, { SignOptions, Algorithm, VerifyOptions } from 'jsonwebtoken'
import { JwtBody } from './types'

const secret = 'not-very-secret'
const issuer = '@streamhue/auth'
const algorithm: Algorithm = 'HS256'

const signOptions: SignOptions = {
  issuer,
  algorithm
}

const verifyOptions: VerifyOptions = {
  issuer,
  algorithms: [algorithm]
}

export async function sign (payload: JwtBody): Promise<string> {
  return await new Promise((resolve, reject) => {
    jwt.sign(payload, secret, signOptions, (error, encoded) => {
      if (error) reject(error)
      resolve(encoded)
    })
  })
}

export async function verify (token: string): Promise<JwtBody> {
  return await new Promise((resolve, reject) => {
    jwt.verify(token, secret, verifyOptions, (error, decoded: JwtBody) => {
      if (error) reject(error)
      resolve(decoded)
    })
  })
}
