import {Sequelize}  from "sequelize";
const ENVDATA=process.env 

const sequelize = new Sequelize(ENVDATA.DB_NAME,ENVDATA.DB_USER,ENVDATA.DB_PASSWORD,{
    host:ENVDATA.DB_HOST,
    port:ENVDATA.DB_PORT,
    dialect:ENVDATA.DB_DIALECT,
    logging:false

})
export const connectDb = async()=>{
    try{
        await sequelize.authenticate()
        console.log("Database succesfully sync")

    }catch(err){
        console.log(err+ " Database not sync ")
    }
}

export default sequelize





// const sequelize = new Sequelize("ecommercestore","postgres","password",{
//     host:"localhost",
//     port:"5432",
//     dialect:"postgres",
//     logging:false