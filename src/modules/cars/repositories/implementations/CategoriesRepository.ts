
import { Categories, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface ICreateCategoryDTO {
    name: string
    description: string
}

class CategoriesRepository {
  // eslint-disable-next-line no-use-before-define

  async create ({ name, description }: ICreateCategoryDTO) {
    await prisma.categories.create({
      data: {
        name,
        description
      }
    })
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
