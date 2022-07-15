
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

class ListCategoryUseCase {
  private categoriesRepository: CategoriesRepository
  constructor (categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  async execute () {
    const allCategories = await this.categoriesRepository.list()
    return allCategories
  }
}
export { ListCategoryUseCase }
