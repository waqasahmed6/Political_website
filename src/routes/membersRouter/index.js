import memberController from "../../controller/members/index.js";
import { Router } from "express";
import adminValidation from "../../validation/admin/validation.js";
import upload from "../../middlewares/multer/index.js";
const memberRouter = Router()

memberRouter.post('/:folderName/register',upload.single("image"), memberController.register)
memberRouter.post('/login', memberController.login)
memberRouter.get('/', memberController.findall)
memberRouter.put('/:id', memberController.update)
memberRouter.get('/:id', memberController.findOne)
memberRouter.delete('/:id', memberController.delete)
memberRouter.post('/:id/event', memberController.findEvnet)
memberRouter.post('/:id/news', memberController.findnews)
memberRouter.post('/:id/socialActivity', memberController.findSocialpost)


export default memberRouter