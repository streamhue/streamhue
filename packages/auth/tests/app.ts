import { app } from '../src/app'

import { Application } from '@curveball/core'
import fetch from 'node-fetch'

import { PackageJson } from '@streamhue/common/types/package-json'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const pkg: PackageJson = require('../package.json')

describe('app', () => {
  it('should instantiate', async () => {
    expect(app).toBeInstanceOf(Application)
  })

  it('should respond to HTTP requests', async () => {
    const server = await app.listen(1234)

    const response = await fetch('http://localhost:1234')
    const body = await response.json()

    expect(body).toStrictEqual({
      message: `${pkg.name} ${pkg.version}`
    })

    server.close()
  })
})
