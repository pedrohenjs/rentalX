import { Specifications } from '@prisma/client'
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository'

class ListSpecificationUseCase {
  private repository: SpecificationRepository
  constructor (repository: SpecificationRepository) {
    this.repository = repository
  }

  async execute (): Promise<Specifications[]> {
    const allSpecifications = await this.repository.list()
    return allSpecifications
  }
}
export { ListSpecificationUseCase }
