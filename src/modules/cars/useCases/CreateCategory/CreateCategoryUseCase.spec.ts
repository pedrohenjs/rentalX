import { CategoriesrepositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoriesrepositoryInMemory

describe('Criar categoria', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesrepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
  })

  it('Deve ser possível criar uma nova categoria', async () => {
    const category = {
      name: 'nome teste',
      description: 'descricao teste'
    }

    await createCategoryUseCase.execute(category)

    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)
    console.log(categoryCreated)

    expect(categoryCreated).toHaveProperty('id')
  })

  it('Não deve ser possível criar uma categoria com mesmo nome', async () => {
    expect(async () => {
      const category = {
        name: 'nome teste',
        description: 'descricao teste'
      }

      await createCategoryUseCase.execute(category)

      await createCategoryUseCase.execute(category)
    }).rejects.toBeInstanceOf(Error)
  })
})
