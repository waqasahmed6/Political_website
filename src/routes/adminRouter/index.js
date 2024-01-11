import adminController from "../../controller/admin/index.js";
import { Router } from "express";
import adminValidation from "../../validation/admin/validation.js";
import upload from "../../middlewares/multer/index.js";
const adminRouter = Router()

adminRouter.post('/:folderName/register',upload.single('image'), adminController.register)
adminRouter.post('/login', adminController.login)
adminRouter.get('/', adminController.findall)
adminRouter.put('/:admin_id', adminController.update)
adminRouter.get('/:admin_id', adminController.findOne)
adminRouter.delete('/:admin_id', adminController.delete)
adminRouter.post('/event', adminController.findEvent)
adminRouter.post('/news', adminController.findNews)
adminRouter.post('/socialActivity', adminController.findSocailActivity)


export default adminRouter