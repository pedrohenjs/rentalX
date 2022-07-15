
import { Router } from 'express'
import { categoriesRouter } from './categories.routes'
import { specificationsRouter } from './specifications.routes'

const router = Router()

router.use('/specifications', specificationsRouter)
router.use('/categories', categoriesRouter)

export { router }
