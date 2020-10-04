import * as JwtService from '../../src/services/jwt'
import { PackageJson } from '../../types/package-json'

const iss = '@streamhue/auth'
const sub = 'random'

describe('jwt service', () => {
  it('signs valid tokens', async () => {
    const token = await JwtService.sign({
      sub
    })
    const parts = token.split('.')
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString('utf8'))

    expect(parts[0]).toStrictEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')

    expect(payload).toStrictEqual(
      expect.objectContaining({
        iat: expect.any(Number),
        iss,
        sub,
      })
    )
    expect(parts).toHaveLength(3)
  })

  it('verifies valid tokens', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyYW5kb20iLCJpc3MiOiJAc3RyZWFtaHVlL2F1dGgiLCJpYXQiOjE2MDE3NDMyMTh9.OwLoAZu5MCeTXpuEnrRpDZXMAZm2SEhatWBICAaQmdk'
    const payload = await JwtService.verify(token)

    expect(payload).toStrictEqual(
      expect.objectContaining({
        iat: 1601743218,
        sub,
        iss,
      })
    )
  })
})
