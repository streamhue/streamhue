import { Middleware } from '@curveball/core/dist'

const isDev = process.env.NODE_ENV !== 'production'

export function jsonOnly (): Middleware {
  return async (ctx, next) => {
    ctx.response.headers.set('Content-Type', 'application/json')

    await next()
    if (!ctx.response.is('json') || typeof ctx.response.body !== 'object') {
      throw new Error('Response is expected to be JSON')
    }

    if (isDev) ctx.response.body = prettify(ctx.response.body)
  }
}

function prettify <T extends object> (obj: T): String {
  return JSON.stringify(obj, null, 2)
}
