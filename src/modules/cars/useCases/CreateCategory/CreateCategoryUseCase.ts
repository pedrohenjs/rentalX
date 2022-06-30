import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

interface IRequest{
    name: string,
    description: string
}

class CreateCategoryUseCase {
  private repository: CategoriesRepository
  constructor (repository: CategoriesRepository) {
    this.repository = repository
  }

  execute ({ name, description }: IRequest) {
    const categoryAlreadyExists = this.repository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!')
    }

    this.repository.create({ name, description })
  }
}
export { CreateCategoryUseCase }
