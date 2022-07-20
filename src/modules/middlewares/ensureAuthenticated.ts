import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { UsersRepository } from '../accounts/repositories/implementations/UsersRepository'

export async function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw Error('Missing token')
  }

  const [, token] = authHeader.split(' ')

  try {
    const repository = new UsersRepository()
    const { sub } = verify(token, 'c6cc8094c2dc07b700ffcc36d64e2138')
    const id = sub!.toString()
    const user = repository.findById(id)

    if (!user) {
      throw Error('User does not exists!')
    }

    next()
  } catch {
    throw Error('Invalid token!')
  }
}
