import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUserController'

export class AuthenticateUserController {
  constructor (private authenticateUserUseCase: AuthenticateUserUseCase) {
    this.authenticateUserUseCase = authenticateUserUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const token = await this.authenticateUserUseCase.execute({ email, password })
    return response.json(token)
  }
}
