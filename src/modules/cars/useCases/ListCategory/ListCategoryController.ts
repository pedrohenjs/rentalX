import { ListCategoryUseCase } from './ListCategoryUseCase'
import { Request, Response } from 'express'

class ListCategoryController {
  private listCategoryUseCase: ListCategoryUseCase
  constructor (listCategoryUseCase: ListCategoryUseCase) {
    this.listCategoryUseCase = listCategoryUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    const allCategories = await this.listCategoryUseCase.execute()
    return response.json(allCategories)
  }
}
export { ListCategoryController }
