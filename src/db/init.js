import adminModel from "../model/admin/index.js"
import constituencyModel from "../model/constituency management/index.js"
import pollingStationModel from "../model/constituency management/pollingStation.js"
import eventsModel from "../model/events/index.js"
import membersModel from "../model/members/index.js"
import newsCommentsModel from "../model/news/comment.js"
import newsModel from "../model/news/index.js"
import socialActivityCommentsModel from "../model/social activity/comment.js"
import socialActivityModel from "../model/social activity/index.js"

const initDb = async()=>{
await adminModel.sync({
    alter:true,
    force:false
}),
await constituencyModel.sync({
    alter:true,
    force:false
}),
await pollingStationModel.sync({
    alter:true,
    force:false
}),
await membersModel.sync({
    alter:true,
    force:false
}),
await eventsModel.sync({
    alter:true,
    force:false
}),
await newsModel.sync({
    alter:true,
    force:false
}),
await newsCommentsModel.sync({
    alter:true,
    force:false
}),
await socialActivityModel.sync({
    alter:true,
    force:false
}),
await socialActivityCommentsModel.sync({
    alter:true,
    force:false
})
}
export default initDb
