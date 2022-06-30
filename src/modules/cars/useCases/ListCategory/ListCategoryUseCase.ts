import { Category } from '../../models/category'
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

class ListCategoryUseCase {
  private categoriesRepository: CategoriesRepository
  constructor (categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute (): Category[] {
    return this.categoriesRepository.list()
  }
}
export { ListCategoryUseCase }
