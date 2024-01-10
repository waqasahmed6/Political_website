import  constituencyController from '../../controller/constituency/index.js'
import constituencyValidation from '../../validation/constituency management/index.js'
import { Router } from 'express'
const constituencyRouter =Router()

constituencyRouter.post('/register',constituencyValidation.check ,constituencyController.create)
constituencyRouter.get('/', constituencyController.findall)
constituencyRouter.put('/:id',constituencyValidation.check ,constituencyController.update)
constituencyRouter.get('/:id', constituencyController.findOne)
constituencyRouter.delete('/:id', constituencyController.delete)

export default constituencyRouter