import { UsersRepository } from '../../repositories/implementations/UsersRepository'
import { AuthenticateUserUseCase } from './AuthenticateUserController'
import { AuthenticateUserController } from './AuthenticateUserUseCase'

const repository = new UsersRepository()
const authenticateUserUseCase = new AuthenticateUserUseCase(repository)
export const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)
