import { Router } from "express";
import adminRouter from "./adminRouter/index.js";
import memberRouter from "./membersRouter/index.js";
import pollingStationRouter from "./constituency/pollingStation.js";
import constituencyRouter from "./constituency/index.js";
import eventRouter from "./events/index.js";
import newsRouter from "./news/index.js";
import newsCommentsRouter from "./news/comments.js";
import socialCommentRouter from "./socialActivity/commens.js";
import socialActivityRouter from "./socialActivity/index.js";

const allRoutes = Router()

allRoutes.use("/admin",adminRouter)
allRoutes.use("/members",memberRouter)
allRoutes.use("/pollingStation",pollingStationRouter)
allRoutes.use("/constituency",constituencyRouter)
allRoutes.use("/events",eventRouter)
allRoutes.use("/news",newsRouter)
allRoutes.use("/newsComments",newsCommentsRouter)
allRoutes.use("/socialComments",socialCommentRouter)
allRoutes.use("/socialActivity",socialActivityRouter)

export default allRoutes