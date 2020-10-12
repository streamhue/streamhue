import grant, { GrantOptionDefaults } from 'grant'

function assignDefaults (): GrantOptionDefaults {
  const isDev = process.env.NODE_ENV !== 'production'

  return {
    state: true,
    protocol: isDev ? 'http' : 'https',
    host: isDev ? 'localhost:3000' : 'auth.streamhue.com',
    transport: 'state'
  }
}

export default function () {
  return grant.curveball({
    defaults: assignDefaults()
  })
}
