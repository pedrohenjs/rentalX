import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory'
import { CreateUsersUseCase } from './createUsersUseCase'

let usersRepository: UsersRepositoryInMemory
let createUsersUseCase: CreateUsersUseCase
describe('Criar usuatio', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory()
    createUsersUseCase = new CreateUsersUseCase(usersRepository)
  })

  it('deve ser possivel criar um usuario', async () => {
    const user = {
      name: 'test',
      email: 'test',
      password: '123',
      username: 'test',
      driver_license: 'test'
    }
    await createUsersUseCase.execute(user)

    const userCreated = await usersRepository.findByEmail(user.email)
    console.log(userCreated)

    expect(userCreated).toHaveProperty('id')
  })
})
