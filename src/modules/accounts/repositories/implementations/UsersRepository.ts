import { Users } from '@prisma/client'
import { prisma } from '../../../../database/prismaClient'
import { ICreateUsersDTO, IUsersRepository } from '../interfaces/IUsersRepository'

export class UsersRepository implements IUsersRepository {
  async create (data: ICreateUsersDTO): Promise<void> {
    await prisma.users.create({ data })
  }

  list (): Promise<Users[]> {
    const allUsers = prisma.users.findMany()
    return allUsers
  }
}
