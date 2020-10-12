import { Controller } from '@curveball/controller'
import { Context } from '@curveball/core/'
import { Unauthorized } from '@curveball/http-errors'

import { JwtService } from '@streamhue/common'

const userServiceMock = {
  async findById (id: string) {
    return {
      id,
      async validatePassword (password: string) {
        return password !== 'fail'
      }
    }
  }
}

class LoginController extends Controller {
  async post (ctx: Context) {
    const user = await userServiceMock.findById(ctx.request.body.id)

    if (!(await user.validatePassword(ctx.request.body.password))) {
      throw new Unauthorized('Incorrect username or password', '/login')
    }

    ctx.response.body = {
      token: await JwtService.sign({
        sub: user.id
      })
    }
  }
}

export default new LoginController()
