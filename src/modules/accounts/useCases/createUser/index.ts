import { UsersRepository } from '../../repositories/implementations/UsersRepository'
import { CreateUsersController } from './createUsersController'
import { CreateUsersUseCase } from './createUsersUseCase'

const usersRepository = new UsersRepository()
const createUsersUseCase = new CreateUsersUseCase(usersRepository)
export const createUsersController = new CreateUsersController(createUsersUseCase)
