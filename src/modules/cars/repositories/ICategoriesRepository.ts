import { Category } from '../models/category'
interface ICreateCategoryDTO {
    name: string
    description: string
}

interface ICategoriesRepsitory {
    findByName(name: string): Category | undefined
    list(): Category[]
    create({ name, description }: ICreateCategoryDTO): void
}

export { ICategoriesRepsitory, ICreateCategoryDTO }
