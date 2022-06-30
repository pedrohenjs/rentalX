import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository'

interface IRequest {
    name: string
    description: string
}
class CreateSpecificationUseCase {
  private repository: SpecificationRepository
  constructor (repository: SpecificationRepository) {
    this.repository = repository
  }

  execute ({ name, description }: IRequest) {
    const specificationAlreadyExists = this.repository.findByName(name)
    if (specificationAlreadyExists) {
      throw new Error('Specifications already exists!')
    }
    this.repository.create({ name, description })
  }
}
export { CreateSpecificationUseCase }
