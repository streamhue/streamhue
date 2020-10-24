import { Application } from '@curveball/core'
import accessLog from '@curveball/accesslog'
import problem from '@curveball/problem'
import bodyParser from '@curveball/bodyparser'
import cors from '@curveball/cors'

import routes from './routes'
import { jsonOnly } from './middleware/json-only'
import grant from './middleware/grant'
import session from './middleware/session'

export const app = new Application()

/*
* TODO: I don't like the default Curveball logger.
* I would like to use pino for production and maybe a custom prettifier or just pino-pretty for dev
*/
if (process.env.NODE_ENV !== 'test') app.use(accessLog())

/* Make app respond with application/problem+json error response */
app.use(problem({

  /* Default to true, unless PROBLEM_QUIT is set to false */
  quiet: true && Boolean(process.env.PROBLEM_QUIET ?? true),

  /* Default to false, unless PROBLEM_DEBUG is set to true */
  debug: Boolean(process.env.PROBLEM_DEBUG)

}))

app.use(cors({
  allowOrigin: '*'
}))

/* Server is JSON only */
app.use(jsonOnly())

app.use(bodyParser())

/* OAuth */
app.use(session())
app.use(grant('login'))
app.use(grant('connect'))

app.use(...routes)
