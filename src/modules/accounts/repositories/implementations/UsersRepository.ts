import { Users } from '@prisma/client'
import { prisma } from '../../../../database/prismaClient'
import { ICreateUsersDTO, IUsersRepository } from '../interfaces/IUsersRepository'

export class UsersRepository implements IUsersRepository {
  async create (data: ICreateUsersDTO): Promise<void> {
    await prisma.users.create({ data })
  }

  async findByEmail (email: string): Promise< Users | null> {
    const user = await prisma.users.findUnique({
      where: {
        email
      }
    })
    return user
  }

  async findById (id: string): Promise<Users | null> {
    const user = await prisma.users.findUnique({
      where: {
        id
      }
    })
    return user
  }
}
