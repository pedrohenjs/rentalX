
import { Categories, PrismaClient } from '@prisma/client'
import { ICategoriesRepsitory } from '../interfaces/ICategoriesRepository'
const prisma = new PrismaClient()

interface ICreateCategoryDTO {
    name: string
    description: string
}

class CategoriesRepository implements ICategoriesRepsitory {
  // eslint-disable-next-line no-use-before-define

  async create ({ name, description }: ICreateCategoryDTO): Promise<Categories> {
    const category = await prisma.categories.create({
      data: {
        name,
        description
      }
    })
    return category
  }

  async findByName (name: string): Promise<Categories | null> {
    const categoryByName = await prisma.categories.findUnique({
      where: {
        name
      }
    })
    return categoryByName
  }

  async list (): Promise<Categories[]> {
    const allCategories = await prisma.categories.findMany()
    return allCategories
  }
}

export { CategoriesRepository }
