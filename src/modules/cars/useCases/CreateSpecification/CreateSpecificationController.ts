import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
import { Request, Response } from 'express'

class CreateSpecificationController {
  private useCase: CreateSpecificationUseCase
  constructor (useCase: CreateSpecificationUseCase) {
    this.useCase = useCase
  }

  handle (request: Request, response: Response) {
    const { name, description } = request.body
    if (!name || !description) {
      throw new Error('Missing specification name or description!')
    }

    this.useCase.execute({ name, description })
    return response.status(201).send()
  }
}
export { CreateSpecificationController }
