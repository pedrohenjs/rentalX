import { Specifications } from '@prisma/client'

interface IRequest {
    name: string
    description: string
}
interface ISpecificationRepository {
    findByName(name: string): Promise<Specifications | null>
    create({ name, description }: IRequest): void
    list(): Promise<Specifications[]>
}
export { ISpecificationRepository }
