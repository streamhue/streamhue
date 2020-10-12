
import router from '@curveball/router'
import homeController from './home/controller'
import loginController from './login/controller'

export default [
  router('/', homeController),
  router('/login', loginController)
]
