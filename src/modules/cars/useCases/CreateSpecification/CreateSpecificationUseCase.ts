import { ISpecificationRepository } from '../../repositories/interfaces/ISpecificationRepository'

interface IRequest {
    name: string
    description: string
}
class CreateSpecificationUseCase {
  constructor (private repository: ISpecificationRepository) {
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
