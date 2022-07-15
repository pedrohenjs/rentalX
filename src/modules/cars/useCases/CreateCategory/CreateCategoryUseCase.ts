
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

  async execute ({ name, description }: IRequest) {
    const categotyExists = await this.repository.findByName(name)

    if (categotyExists) {
      throw Error('Category already exists!')
    }

    await this.repository.create({ name, description })
  }
}
export { CreateCategoryUseCase }
