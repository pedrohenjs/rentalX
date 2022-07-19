import { compare } from 'bcrypt'
import { UsersRepository } from '../../repositories/implementations/UsersRepository'
import { sign } from 'jsonwebtoken'

interface IRequest {
    email: string
    password: string
}
interface IResponse {
    user: {
        name: string
        email: string
    },
    token: string
}
export class AuthenticateUserUseCase {
  constructor (private repository: UsersRepository) {
    this.repository = repository
  }

  async execute ({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.repository.findByEmail(email)

    if (!user) {
      throw new Error('Email or password incorrect!')
    }
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email or password incorrect!')
    }

    const token = sign({}, 'c6cc8094c2dc07b700ffcc36d64e2138', {
      subject: user.id,
      expiresIn: '1d'
    })
    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }
    return tokenReturn
  }
}
