
import { ISpecificationRepository } from '../../repositories/interfaces/ISpecificationRepository'
import { prisma } from '../../../../database/prismaClient'
import { Specifications } from '@prisma/client'
interface IRequest {
    name: string
    description: string
}

class SpecificationRepository implements ISpecificationRepository {
  async create ({ name, description }: IRequest): Promise<void> {
    await prisma.specifications.create({
      data: {
        name,
        description
      }
    })
  }

  async findByName (name: string): Promise<Specifications | null> {
    const specification = await prisma.specifications.findUnique({
      where: {
        name
      }
    })
    return specification
  }

  async list (): Promise<Specifications[]> {
    const allSpecifications = await prisma.specifications.findMany()
    return allSpecifications
  }
}
export { SpecificationRepository }
