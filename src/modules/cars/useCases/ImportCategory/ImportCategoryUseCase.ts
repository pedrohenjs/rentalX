/* eslint-disable no-undef */
import fs from 'fs'
import { parse } from 'csv-parse'
import { ICategoriesRepsitory } from '../../repositories/interfaces/ICategoriesRepository'
import { prisma } from '../../../../database/prismaClient'

interface IImportCategory {
  name: string
  description: string
}

class ImportCategoryUseCase {
  constructor (private categoryRepository: ICategoriesRepsitory) {
    this.categoryRepository = categoryRepository
  }

  loadCategories (file: Express.Multer.File | undefined): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file!.path)
      const importedCategories: IImportCategory[] = []

      const parseFile = parse()

      stream.pipe(parseFile)

      parseFile.on('data', (line) => {
        const [name, description] = line

        importedCategories.push({
          name,
          description
        })
      }).on('end', () => {
        fs.promises.unlink(file!.path)
        resolve(importedCategories)
      }).on('error', (e) => {
        reject(e)
      })
    })
  }

  execute (file: Express.Multer.File | undefined): void {
    this.loadCategories(file).then(importedCategories => {
      console.log(importedCategories)
      importedCategories.map(async (category) => {
        const { name, description } = category
        const existCategory = await this.categoryRepository.findByName(name)

        if (!existCategory) {
          await prisma.categories.create({
            data: {
              name,
              description
            }
          })
        }
        return undefined
      })
    }).catch(e => console.log(e))
  }
}
export { ImportCategoryUseCase }
