import { Users } from '@prisma/client'

export interface ICreateUsersDTO {
    name: string
    username: string
    email: string
    password: string
    driver_license: string
}

export interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<void>
    findByEmail(email: string): Promise<Users | null>
    findById(id: string): Promise<Users | null>
}
