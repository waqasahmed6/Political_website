import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const eventsModel = sequelize.define("events",{
    eventTitle:{
        type:DataTypes.STRING,
        allowNull:false
    },
    eventDescription:{
        type:DataTypes.STRING,
        allowNull:true
    },
    eventPicture:{
        type:DataTypes.STRING,
        allowNull:false   
    },
    eventDate:{
        type:DataTypes.STRING,
        allowNull:false   
    }
   
})
export default eventsModel