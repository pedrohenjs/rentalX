
import { ICategoriesRepsitory } from '../../repositories/interfaces/ICategoriesRepository'

interface IRequest{
    name: string,
    description: string
}

class CreateCategoryUseCase {
  constructor (private repository: ICategoriesRepsitory) {
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
