import { Specification } from '../../models/specification'
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository'

class ListSpecificationUseCase {
  private repository: SpecificationRepository
  constructor (repository: SpecificationRepository) {
    this.repository = repository
  }

  execute (): Specification[] {
    return this.repository.list()
  }
}
export { ListSpecificationUseCase }
