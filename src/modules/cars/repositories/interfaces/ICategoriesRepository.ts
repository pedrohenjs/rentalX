import { Categories } from '@prisma/client'
interface ICreateCategoryDTO {
    name: string
    description: string
}

interface ICategoriesRepsitory {
    findByName(name: string): Promise<Categories | null>
    list(): Promise<Categories[]>
    create({ name, description }: ICreateCategoryDTO): Promise<Categories>
}

export { ICategoriesRepsitory, ICreateCategoryDTO }
