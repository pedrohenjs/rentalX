import { Specifications } from '@prisma/client'

interface IRequest {
    name: string
    description: string
}
interface ISpecificationRepository {
    create({ name, description }: IRequest): void
    list(): Promise<Specifications[]>
}
export { ISpecificationRepository }
