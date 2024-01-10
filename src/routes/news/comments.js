
import { Router } from "express";
import newsCommentsController from "../../controller/news/comments.js";
const newsCommentsRouter = Router()

newsCommentsRouter.post('/add', newsCommentsController.add)


export default newsCommentsRouter
