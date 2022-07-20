import { UsersRepository } from '../../repositories/implementations/UsersRepository'
import { AuthenticateUserUseCase } from '././AuthenticateUserUseCase'
import { AuthenticateUserController } from './AuthenticateUserController'

const repository = new UsersRepository()
const authenticateUserUseCase = new AuthenticateUserUseCase(repository)
export const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)
