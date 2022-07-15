import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
import { Request, Response } from 'express'

class CreateSpecificationController {
  private useCase: CreateSpecificationUseCase
  constructor (useCase: CreateSpecificationUseCase) {
    this.useCase = useCase
  }

  async handle (request: Request, response: Response) {
    const { name, description } = request.body

    await this.useCase.execute({ name, description })
    return response.status(201).send()
  }
}
export { CreateSpecificationController }
