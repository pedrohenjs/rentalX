
import { Router } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/CreateSpecification'
import { listSpecificationController } from '../modules/cars/useCases/ListSpecification'

const specificationsRouter = Router()

specificationsRouter.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
})
specificationsRouter.get('/', (request, response) => {
  return listSpecificationController.handle(request, response)
})

export { specificationsRouter }
