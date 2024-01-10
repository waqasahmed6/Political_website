import constituencyModel from "../../model/constituency management/index.js";
import pollingStationModel from "../../model/constituency management/pollingStation.js";

const constituencyController = {
  create: async (req, res) => {
    const { constituencyName,constituencyAddress } = req.body;
   
    try {
      const response = await constituencyModel.findOne({
        where: { constituencyName },
      });
      if (response) {
        return res.status(400).json({ message: "constituency name already added " });
      } else {
       
        await constituencyModel.create({
            constituencyAddress,
            constituencyName
        });
        res.status(201).json({ message: "Registered successfully" });
      }
    } catch (error) {
      res.json(error + " Error occoured during constituency registration");
    }
  },
 
  findall:async (req,res)=>{
    // const{adminID}=req.params
    try {
      const response =  await constituencyModel.findAll(
        {
            include:[pollingStationModel]
        }
      )
      
      res.json(response)
    } catch (error) {
      res.json(error)
      console.log(error)
    }

  },
  update:async(req,res)=>{
    try {
        const{id}=req.params
    const {constituencyName, constituencyAddress } = req.body;
    const response = await constituencyModel.findOne({
        where:{id}
    })
    if(!response){
        res.status(400).json({message:"constituency not found"})
    }else{
      if(response.constituencyName==constituencyName){
        return res.status(400).json({message:"Name already in use"})       
      }
      
        await constituencyModel.update({constituencyName,constituencyAddress},{where:{id}})
        res.json({message:" Updated successfully"})
    }
        
    } catch (error) {
        res.json({message:"error finding Constituency" ,error})
    }
  },
  findOne:async(req,res)=>{
    const{id}=req.params
  try {
     const response=await constituencyModel.findOne({
      where:{id}
     })    
     res.status(200).json({response,message:"Found successfully"})
  } catch (error) {
    res.json({message:"error finding Constituency",error})
  }

  },
  delete:async(req,res)=>{
    const {id}=req.params
    try {
      const response =await constituencyModel.findOne({where:{id}})
      if(!response){
        res.status(404).json({message:"admin not found"})
      }
      await constituencyModel.destroy({where:{id}})
      res.status(200).json({message:"admin deleted successfully"})
      
    } catch (error) {
      // res.status(404).json({message:"Error deleting admin"})
      console.log(error)
    }
  }

};


export default constituencyController;
