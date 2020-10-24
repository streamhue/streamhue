import session from '@curveball/session'

export default () => session({
  store: 'memory',
  cookieName: 'oauth'
})
