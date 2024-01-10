import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import socialActivityModel from "../social activity/index.js";
import socialActivityCommentsModel from "../social activity/comment.js";
import newsModel from "../news/index.js";
import newsCommentsModel from "../news/comment.js";
import eventsModel from "../events/index.js";

const membersModel = sequelize.define("members",{
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

//>> Relationship of member  with  social activity
membersModel.hasMany(socialActivityModel)
socialActivityModel.belongsTo(membersModel)

//
membersModel.hasMany(socialActivityCommentsModel)
socialActivityCommentsModel.belongsTo(membersModel)

//>> Relation of Member with  newsPosts model
membersModel.hasMany(newsModel)
newsModel.belongsTo(membersModel)
//

membersModel.hasMany(newsCommentsModel)
newsCommentsModel.belongsTo(membersModel)

//>> Reation of member with events

membersModel.hasMany(eventsModel)
eventsModel.belongsTo(membersModel)



export default membersModel