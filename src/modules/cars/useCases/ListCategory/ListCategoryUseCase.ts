import { ICategoriesRepsitory } from '../../repositories/interfaces/ICategoriesRepository'

class ListCategoryUseCase {
  constructor (private categoriesRepository: ICategoriesRepsitory) {
    this.categoriesRepository = categoriesRepository
  }

  async execute () {
    const allCategories = await this.categoriesRepository.list()
    return allCategories
  }
}
export { ListCategoryUseCase }
