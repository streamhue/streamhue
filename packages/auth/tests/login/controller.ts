import { app } from '../../src/app'
import { MemoryRequest } from '@curveball/core'

describe('login controller', () => {
  it('responds with a token on a valid request', async () => {
    const request = new MemoryRequest('POST', '/login', {
      'Content-Type': 'application/json'
    }, {
      id: 'random',
      password: 'success'
    })

    const response = await app.subRequest(request)
    expect(response).toStrictEqual(expect.objectContaining({
      body: {
        token: expect.any(String)
      }
    }))
  })

  it('rejects wrong passwords', async () => {
    const request = new MemoryRequest('POST', '/login', {
      'Content-Type': 'applicaton/json'
    }, {
      id: 'random',
      password: 'fail'
    })

    const response = await app.subRequest(request)
    expect(response.body.token).toBeUndefined()
    expect(response.body.status).toStrictEqual(401)
  })
})
