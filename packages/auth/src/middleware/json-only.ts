import { Middleware } from '@curveball/core/dist'

export function jsonOnly (): Middleware {
  return async (ctx, next) => {
    ctx.response.headers.set('Content-Type', 'application/json')
    await next()
    if (!ctx.response.is('json') || typeof ctx.response.body !== 'object') {
      throw new Error('Response is expected to be JSON')
    }
  }
}
