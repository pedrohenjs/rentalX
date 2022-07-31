import { Users } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { ICreateUsersDTO, IUsersRepository } from '../interfaces/IUsersRepository'

export class UsersRepositoryInMemory implements IUsersRepository {
  private users: Users[] = []

  async create (data: ICreateUsersDTO): Promise<void> {
    const user: Users = {
      id: uuidv4(),
      name: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      avatar: null,
      driver_license: data.driver_license,
      admin: false,
      created_at: new Date()
    }

    this.users.push(user)
  }

  async findByEmail (email: string): Promise<Users | null> {
    const user = this.users.find(user => user.email === email)
    if (!user) {
      return null
    }
    return user
  }

  findById (id: string): Promise<Users | null> {
    throw new Error('Method not implemented.')
  }
}
