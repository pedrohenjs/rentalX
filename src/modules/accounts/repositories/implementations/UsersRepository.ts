import { prisma } from '../../../../database/prismaClient'
import { ICreateUsersDTO, IUsersRepository } from '../interfaces/IUsersRepository'

export class UsersRepository implements IUsersRepository {
  async create (data: ICreateUsersDTO): Promise<void> {
    await prisma.users.create({ data })
  }

  async findByEmail (email: string) {
    const user = await prisma.users.findUnique({
      where: {
        email
      }
    })
    return user
  }
}
