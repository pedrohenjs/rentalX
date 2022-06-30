import { Specification } from '../../models/specification'

interface IRequest {
    name: string
    description: string
}
interface ISpecificationRepository {
    create({ name, description }: IRequest): void
    list(): Specification[]
}
export { ISpecificationRepository }
