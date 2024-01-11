import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const socialActivityCommentsModel = sequelize.define("socialPostComents",{
    totalComments:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
export default socialActivityCommentsModel