import pollingStationController from '../../controller/constituency/pollingStation.js'
import pollingStationValidation from '../../validation/constituency management/pollingStation.js'
import { Router } from 'express'
const pollingStationRouter =Router()

pollingStationRouter.post('/register',pollingStationValidation.check ,pollingStationController.register)
pollingStationRouter.get('/', pollingStationController.findall)
pollingStationRouter.put('/:id',pollingStationValidation.check ,pollingStationController.update)
pollingStationRouter.get('/:id', pollingStationController.findOne)
pollingStationRouter.delete('/:id', pollingStationController.delete)

export default pollingStationRouter