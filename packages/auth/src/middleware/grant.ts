import grant, { GrantOptionDefaults } from 'grant'
import { commaListsAnd } from 'common-tags'

type oauthTypes = 'connect' | 'login'

function assignDefaults (type: oauthTypes): GrantOptionDefaults {
  const isDev = process.env.NODE_ENV !== 'production'

  return {
    state: true,
    prefix: `/vendor/${type}`,
    protocol: isDev ? 'http' : 'https',
    host: isDev ? 'localhost:3000' : 'auth.streamhue.com',
    /* origin: 'http://localhost:3000', */
    transport: 'session'
  }
}

export default function oauth (type: oauthTypes) {
  /* Add all required ENV vars to this array */
  const requiredKeys = ['TWITCH_KEY', 'TWITCH_SECRET']

  const missingKeys = requiredKeys.filter(key => !(key in process.env))
  if (missingKeys.length > 1) throw new Error(commaListsAnd`Missing keys ${missingKeys}`)

  return grant.curveball({
    defaults: assignDefaults(type),
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    twitch: {
      key: process.env.TWITCH_KEY!,
      secret: process.env.TWITCH_SECRET!,
      scope: ['bits:read']
    }
    /* eslint-enable  @typescript-eslint/no-non-null-assertion */
  })
}
