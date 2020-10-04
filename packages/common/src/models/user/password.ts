import * as argon2 from 'argon2'

const options: argon2.Options & { raw?: false } = {
  type: argon2.argon2i,
  memoryCost: 2 ** 13,
  hashLength: 42,
  raw: false
}

export async function hashPassword (password: string): Promise<string> {
  return await argon2.hash(password, options)
}

export async function verifyHash (hash: string, password: string): Promise<boolean> {
  return await argon2.verify(hash, password, options)
}
