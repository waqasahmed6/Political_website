import  "dotenv/config"
import  express  from "express";
import { connectDb } from "./db/config.js";
import initDb from "./db/init.js";
import allRoutes from "./routes/allroutes.js";
import sequelize from "./db/config.js";
import Session from "express-session";
import Sequelizestore from "connect-session-sequelize"
import cors from "cors"
import uploads from "./middlewares/multer/index.js";
const envData = process.env

const app =express()
app.use(express.json())
app.use("/productImage",express.static("upload/images"))

const corsInstance = new cors({
  origin: ["http://localhost:5173"],
  credentials: true,
})
app.use(corsInstance);



app.post('/:model/upload', uploads.single('file'), async (req, res) => {
  try {
    res.json(req.file)
    console.log("sent")
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Error uploading file' });
  }
});

// app.use("/images",upload.single("product"),(req,res)=>{
//   console.log(req.file)
//   res.json(req.file)
// })


const mySequelizeStore = Sequelizestore(Session.Store);
const mySequelizeStore1 = new mySequelizeStore({
  db: sequelize,
});
app.use(
  Session({
    secret: "khgaiuksxbkaj",
    store: mySequelizeStore1,
    saveUninitialized:true,
    resave: false,
    proxy: true,
  })
);
mySequelizeStore1.sync();

connectDb()
initDb()
.then(()=>{
    console.log(" db sync")
}).catch((err)=>{console.log("db syn error "+ err)})
app.use("/",allRoutes)

app.listen(envData.PORT,(err)=>{
    if(!err){
        console.log(`server is listening on http://localhost:${envData.PORT}`)
    }
    else{
        console.log(err+" server error")
    }
})
