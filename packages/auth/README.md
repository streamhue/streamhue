# `auth`

Authentication server. Manages user credentials.


## Usage

`$ npm run dev` to start developing.

## Style
### Controllers
One controller per endpoint, each containing HTTP method implementations.

### Middleware
Add global middleware directly in `app.ts`. If it requires anything more than a plain function call, like any sortof of configuration, move it to a dedicated file that exports the configured middleware, or a function that returns such, in the `middleware` subdir.

### Routing
Keep `routes.ts` as lean and clean as possible. Import a controller, mount it to its endpoint.

### Server
`app.ts` is for server logic, `index.ts` only cares about starting the app, no business logic.
