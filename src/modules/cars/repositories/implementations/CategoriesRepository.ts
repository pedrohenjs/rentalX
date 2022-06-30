import { Category } from '../../models/category'

interface ICreateCategoryDTO {
    name: string
    description: string
}

class CategoriesRepository {
  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoriesRepository
  private categories: Category[]

  static getInstance () {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE
  }

  constructor () {
    this.categories = []
  }

  create ({ name, description }: ICreateCategoryDTO) {
    const category: Category = new Category()
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
  }

  findByName (name: string): Category | undefined {
    const categoryByName = this.categories.find(category => category.name === name)
    return categoryByName
  }

  list () {
    return this.categories
  }
}

export { CategoriesRepository }
