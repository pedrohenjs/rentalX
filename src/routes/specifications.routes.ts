import { Router } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/CreateSpecification'
import { listSpecificationController } from '../modules/cars/useCases/ListSpecification'

const specificationsRouter = Router()

specificationsRouter.post('/', (request, response) => {
  createSpecificationController.handle(request, response)
})
specificationsRouter.get('/', (request, response) => {
  listSpecificationController.handle(request, response)
})

export { specificationsRouter }
