import Controller from '@curveball/controller'
import { Context } from '@curveball/core'

import { PackageJson } from '@streamhue/common/types/package-json'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const pkg: PackageJson = require('../../package.json')

class HomeController extends Controller {
  get (ctx: Context) {
    ctx.response.body = {
      message: `${pkg.name} ${pkg.version}`
    }
  }
}

export default new HomeController()
