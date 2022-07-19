import { Router } from 'express'
import { createUsersController } from '../modules/accounts/useCases/createUser'

export const usersRouter = Router()

usersRouter.post('/', (request, response) => {
  return createUsersController.handle(request, response)
})
