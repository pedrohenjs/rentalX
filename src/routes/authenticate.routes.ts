import { authenticateUserController } from '../modules/accounts/useCases/authenticateUser'
import { Router } from 'express'

export const authenticateRoutes = Router()

authenticateRoutes.post('/sessions', (request, response) => {
  return authenticateUserController.handle(request, response)
})
