
import { Router } from 'express'
import { createSpecificationController } from '../modules/cars/useCases/CreateSpecification'
import { listSpecificationController } from '../modules/cars/useCases/ListSpecification'
import { ensureAuthenticated } from '../modules/middlewares/ensureAuthenticated'

const specificationsRouter = Router()
specificationsRouter.use(ensureAuthenticated)

specificationsRouter.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
})
specificationsRouter.get('/', (request, response) => {
  return listSpecificationController.handle(request, response)
})

export { specificationsRouter }
