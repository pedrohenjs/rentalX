import { Request, Response } from 'express'
import { CreateUsersUseCase } from './createUsersUseCase'

export class CreateUsersController {
  constructor (private createUsersUseCase: CreateUsersUseCase) {
    this.createUsersUseCase = createUsersUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    const {
      name,
      username,
      email,
      password,
      driver_license
    } = request.body

    await this.createUsersUseCase.execute({
      name,
      username,
      email,
      password,
      driver_license
    })
    return response.status(201).send()
  }
}
