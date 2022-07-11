import express from 'express'
import cors from 'cors'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger.json'
import './database/index'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3333, () => {
  console.log('Server is running!')
})
