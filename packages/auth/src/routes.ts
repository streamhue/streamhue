
import router from '@curveball/router'
import homeController from './home/controller'
import loginController from './login/controller'
import oauthConnectController from './oauth/connect/controller'

export default [
  router('/', homeController),
  router('/login', loginController),
  router('/vendor/:type/:vendor/callback', oauthConnectController)
]
