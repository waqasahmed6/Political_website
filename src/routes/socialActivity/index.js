import socialActivityController from "../../controller/social-activity/index.js";
import { Router } from "express";
import upload from "../../middlewares/multer/index.js";
// import upload from "../../middlewares/multer/index.js";
const socialActivityRouter = Router()

socialActivityRouter.post('/add', upload.single("image"),socialActivityController.Add)
socialActivityRouter.get('/', socialActivityController.findall)
socialActivityRouter.put('/update/:id', socialActivityController.update)
socialActivityRouter.get('/:id', socialActivityController.findOne)
socialActivityRouter.delete('/:id', socialActivityController.delete)
socialActivityRouter.put('/:id/updateLikes', socialActivityController.updatelikes)


export default socialActivityRouter