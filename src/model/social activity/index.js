import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import socialActivityCommentsModel from "./comment.js";

const socialActivityModel = sequelize.define("socialActivityposts",{
    tittle:{
        type:DataTypes.STRING,
        allowNull:true
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true
    },
    picture:{
        type:DataTypes.STRING,
        allowNull:true
    },
    totalLikes:{
        allowNull:true,
        type:DataTypes.INTEGER,
        defaultValue:0
    }
})
socialActivityModel.hasMany(socialActivityCommentsModel)
socialActivityCommentsModel.belongsTo(socialActivityModel)

export default socialActivityModel