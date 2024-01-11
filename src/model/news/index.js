import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import newsCommentsModel from "./comment.js";

const newsModel = sequelize.define("news",{
    newsTitle:{
        type:DataTypes.STRING,
        allowNull:false
    },
    newsContent:{
        type:DataTypes.STRING,
        allowNull:false
    },
    newsPicture:{
        type:DataTypes.STRING,
        allowNull:false   
    },
    totalLikes:{
        type:DataTypes.INTEGER,
        allowNull:true ,
        defaultValue:0

    }
   
})


newsModel.hasMany(newsCommentsModel)
newsCommentsModel.belongsTo(newsModel)

export default newsModel

