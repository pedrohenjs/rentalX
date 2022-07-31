import { Categories } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'
import { ICategoriesRepsitory, ICreateCategoryDTO } from '../interfaces/ICategoriesRepository'

class CategoriesrepositoryInMemory implements ICategoriesRepsitory {
  private categories: Categories[] = []

  async findByName (name: string): Promise<Categories | null> {
    const category = this.categories.find((category) => category.name === name)
    if (!category) {
      return null
    }
    return category
  }

  async list (): Promise<Categories[]> {
    const all = this.categories
    return all
  }

  async create ({ name, description }: ICreateCategoryDTO): Promise<Categories> {
    const category = {
      name,
      id: uuidv4(),
      description,
      created_at: new Date()
    }
    this.categories.push(category)
    return category
  }
}
export {
  CategoriesrepositoryInMemory
}
