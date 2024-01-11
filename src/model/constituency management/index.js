import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import pollingStationModel from "./pollingStation.js";

const constituencyModel = sequelize.define("constituency",{
     constituencyName:{
        type:DataTypes.STRING,
        allowNull:false
    },
 
    constituencyAddress:{
        type:DataTypes.STRING,
        allowNull:false   
    }
})

constituencyModel.hasMany(pollingStationModel);
pollingStationModel.belongsTo(constituencyModel);

export default constituencyModel
