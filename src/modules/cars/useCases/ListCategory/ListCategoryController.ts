import { ListCategoryUseCase } from './ListCategoryUseCase'
import { Request, Response } from 'express'

class ListCategoryController {
  private listCategoryUseCase: ListCategoryUseCase
  constructor (listCategoryUseCase: ListCategoryUseCase) {
    this.listCategoryUseCase = listCategoryUseCase
  }

  handle (request: Request, response: Response): Response {
    const allCategories = this.listCategoryUseCase.execute()
    return response.json(allCategories)
  }
}
export { ListCategoryController }
