import { app } from './app'
import process from 'process'
import { database } from '@streamhue/common'
import { PackageJson } from '@streamhue/common/types/package-json'

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const pkg: PackageJson = require('../package.json')

console.log(`🔒 ${pkg.name} ${pkg.version}`)

async function start (uri: string | undefined, port: string) {
  if (uri === undefined) throw new Error('No database URI in environment')
  await database.connect(uri)
  console.log('Database connected')
  app.listen(parseInt(port, 10))
  console.log(`Listening on port ${port}`)
}

start(process.env.MONGO_URI, process.env.PORT ?? '6000').catch(
  error => console.error(error)
)
