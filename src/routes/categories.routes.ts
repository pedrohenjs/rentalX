import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/CreateCategory'
import { listCategoryController } from '../modules/cars/useCases/ListCategory'
import multer from 'multer'
import { importCategoryController } from '../modules/cars/useCases/ImportCategory'

const categoriesRouter = Router()
const upload = multer({
  dest: './tmp'
})

categoriesRouter.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRouter.get('/', (request, response) => {
  return listCategoryController.handle(request, response)
})

categoriesRouter.post('/import', upload.single('file'), (request, response) => {
  importCategoryController.handle(request, response)
}
)
export { categoriesRouter }