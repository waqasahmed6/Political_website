import newsController from "../../controller/news/index.js";
import { Router } from "express";
import upload from "../../middlewares/multer/index.js";
// import upload from "../../middlewares/multer/index.js";
const newsRouter = Router()

newsRouter.post('/folderName/add',upload.single("image"), newsController.Add)
newsRouter.get('/', newsController.findall)
newsRouter.put('/update/:id', newsController.update)
newsRouter.get('/:id', newsController.findOne)
newsRouter.delete('/:id', newsController.delete)
newsRouter.put('/:id/updateLikes', newsController.updatelikes)


export default newsRouter