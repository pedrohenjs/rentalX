import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository'
import { ListSpecificationUseCase } from './ListSpecficationUseCase'
import { ListSpecificationController } from './ListSpecificationController'

const specificationRepository = SpecificationRepository.getInstance()
const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepository)
const listSpecificationController = new ListSpecificationController(listSpecificationUseCase)

export { listSpecificationController }
