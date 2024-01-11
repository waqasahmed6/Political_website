import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const pollingStationModel = sequelize.define("pollingStation",{
    pollingStationName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pollingStationAddress:{
        type:DataTypes.STRING,
        allowNull:false
    },
    agentName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    agentPhoneNo:{
        type:DataTypes.STRING,
        allowNull:false   
    },
    agentCnic:{
        type:DataTypes.STRING,
        allowNull:false   
    }
})
export default pollingStationModel