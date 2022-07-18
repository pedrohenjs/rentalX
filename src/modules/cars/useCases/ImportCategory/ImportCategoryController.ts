import { Request, Response } from 'express'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

class ImportCategoryController {
  private importCategoryUseCase
  constructor (importCategoryUseCase: ImportCategoryUseCase) {
    this.importCategoryUseCase = importCategoryUseCase
  }

  handle (request: Request, response: Response) {
    const { file } = request
    if (!file) {
      throw new Error('Missing file!')
    }
    this.importCategoryUseCase.execute(file)
    return response.status(201).send()
  }
}
export { ImportCategoryController }
