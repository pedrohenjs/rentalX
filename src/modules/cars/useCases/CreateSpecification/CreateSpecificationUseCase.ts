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

  async execute ({ name, description }: IRequest) {
    const specificationAlreadyExists = await this.repository.findByName(name)

    if (specificationAlreadyExists) {
      throw Error('Specification already exists!')
    }

    await this.repository.create({ name, description })
  }
}
export { CreateSpecificationUseCase }
