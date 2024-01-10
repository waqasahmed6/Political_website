import eventController from "../../controller/events/index.js";
import { Router } from "express";
import eventValidation from "../../validation/events/index.js";
import upload from "../../middlewares/multer/index.js";
// import upload from "../../middlewares/multer/index.js";
const eventRouter = Router()

eventRouter.post('folderName/add',upload.single('image'),eventController.Add)
eventRouter.get('/', eventController.findall)
eventRouter.put('/:id', eventValidation.check, eventController.update)
eventRouter.get('/:id', eventController.findOne)
eventRouter.delete('/:id', eventController.delete)


export default eventRouter