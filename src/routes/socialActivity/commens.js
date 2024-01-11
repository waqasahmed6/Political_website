import socialCommentController from "../../controller/social-activity/comments.js";

import { Router } from "express";
const socialCommentRouter =Router()

socialCommentRouter.post("/add",socialCommentController.add)

export default socialCommentRouter