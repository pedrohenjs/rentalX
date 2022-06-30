import { Specification } from '../../models/specification'
import { ISpecificationRepository } from '../../repositories/interfaces/ISpecificationRepository'
interface IRequest {
    name: string
    description: string
}

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[]
  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SpecificationRepository
  constructor () {
    this.specifications = []
  }

  create ({ name, description }: IRequest): void {
    const specification = new Specification()
    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })
    this.specifications.push(specification)
  }

  static getInstance () {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository()
    }
    return SpecificationRepository.INSTANCE
  }

  findByName (name: string) {
    return this.specifications.find(elemente => elemente.name === name)
  }

  list () {
    return this.specifications
  }
}
export { SpecificationRepository }
