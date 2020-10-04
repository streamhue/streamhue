import User from '../../../src/models/user'
import * as database from '../../../src/services/database'
import * as dbHelper from '../../../db-test-helper'

const validUserData = { name: 'Peter Kropotkin', password: 'bread' }

beforeAll(dbHelper.connect)
afterEach(dbHelper.clearDatabase)
afterAll(dbHelper.closeDatabase)

describe('user model', () => {
  it('creates and saves users', async () => {
    const validUser = new User(validUserData)
    const savedUser = await validUser.save()

    expect(savedUser._id).toBeDefined()
    expect(savedUser.name).toBe(validUserData.name)
  })

  it('hashes passwords', async () => {
    const validUser = new User(validUserData)
    const savedUser = await validUser.save()

    expect(savedUser.password).not.toBe(validUserData.password)
    expect(savedUser.password).toContain('$argon2i$v=19$m=8192,t=3,p=1$')
  })

  it('verifies passwords', async () => {
    const validUser = new User(validUserData)
    const savedUser = await validUser.save()

    expect(savedUser.verifyPassword(validUserData.password)).resolves.toBe(true)
  })
})
