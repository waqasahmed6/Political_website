import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import socialActivityModel from "../social activity/index.js";
import socialActivityCommentsModel from "../social activity/comment.js";
import newsModel from "../news/index.js";
import newsCommentsModel from "../news/comment.js";
import eventsModel from "../events/index.js";

const adminModel = sequelize.define("admin",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    picture:{
        type:DataTypes.STRING,
        allowNull:false   
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false   
    },
    cnic:{
        type:DataTypes.STRING,
        allowNull:false  
    },
phoneNo:{
    type:DataTypes.STRING,
    allowNull:false  
    }
})
//>>>>>> relation of admin with socialActivity
adminModel.hasMany(socialActivityModel)
socialActivityModel.belongsTo(adminModel)
//
adminModel.hasMany(socialActivityCommentsModel)
socialActivityCommentsModel.belongsTo(adminModel)


//>>>>> relation of admim with news
adminModel.hasMany(newsModel)
newsModel.belongsTo(adminModel)

//
adminModel.hasMany(newsCommentsModel)
newsCommentsModel.belongsTo(adminModel)

//>>>> realtion of admin with  events
adminModel.hasMany(eventsModel)
eventsModel.belongsTo(adminModel)






export default adminModel