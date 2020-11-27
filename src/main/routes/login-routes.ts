import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeLoginController } from '@/main/factories/controllers/login/login/login-controller-factory'
import { makeSigUpController } from '@/main/factories/controllers/login/signup/signup-controller-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSigUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
