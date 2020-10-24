import Controller from '@curveball/controller'
import { Context } from '@curveball/core'
import { NotAcceptable } from '@curveball/http-errors'

class CallbackController extends Controller {
  get (ctx: Context) {
    if (ctx.state.session.grant?.response?.error !== undefined) {
      console.error(ctx.state.session.grant)
      throw new NotAcceptable(ctx.state.session.grant.response.error_description)
    }

    ctx.response.body = {
      type: ctx.state.params.type,
      vendor: ctx.state.params.vendor,
      provider: ctx.state.session.grant.provider,
      access_token: ctx.state.session.grant.response.access_token
    }
  }
}

export default new CallbackController()
