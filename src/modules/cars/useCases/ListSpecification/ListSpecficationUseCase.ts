import { Specifications } from '@prisma/client'
import { ISpecificationRepository } from '../../repositories/interfaces/ISpecificationRepository'

class ListSpecificationUseCase {
  constructor (private repository: ISpecificationRepository) {
    this.repository = repository
  }

  async execute (): Promise<Specifications[]> {
    const allSpecifications = await this.repository.list()
    return allSpecifications
  }
}
export { ListSpecificationUseCase }
