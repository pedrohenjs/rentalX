/* eslint-disable no-undef */
import fs from 'fs'
import { parse } from 'csv-parse'
import { ICategoriesRepsitory } from '../../repositories/interfaces/ICategoriesRepository'

interface IImportCategory {
  name: string
  description: string
}

class ImportCategoryUseCase {
  private categoryRepository
  constructor (categoryRepository: ICategoriesRepsitory) {
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
        resolve(importedCategories)
      }).on('error', (e) => {
        reject(e)
      })
    })
  }

  execute (file: Express.Multer.File | undefined): void {
    this.loadCategories(file).then(importedCategories => {
      console.log(importedCategories)
      importedCategories.map((category) => {
        const { name, description } = category

        const existCategory = this.categoryRepository.findByName(name)

        if (!existCategory) {
          this.categoryRepository.create({ name, description })
          return null
        }
        return null
      })
    }).catch(e => console.log(e))
  }
}
export { ImportCategoryUseCase }
