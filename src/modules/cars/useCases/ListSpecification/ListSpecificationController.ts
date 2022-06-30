import { ListSpecificationUseCase } from './ListSpecficationUseCase'
import { Request, Response } from 'express'

class ListSpecificationController {
  private useCase: ListSpecificationUseCase
  constructor (useCase: ListSpecificationUseCase) {
    this.useCase = useCase
  }

  handle (request: Request, response: Response) {
    const allSpecifications = this.useCase.execute()
    return response.status(200).json(allSpecifications)
  }
}
export { ListSpecificationController }
