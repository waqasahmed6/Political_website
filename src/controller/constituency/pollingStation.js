import pollingStationModel from "../../model/constituency management/pollingStation.js";

const pollingStationController = {
  register: async (req, res) => {
    const { pollingStationName,pollingStationAddress,agentName,agentPhoneNo,agentCnic} = req.body
   
    try {
      const response = await pollingStationModel.findOne({
        where: { pollingStationName },
      });
      console.log(response)
      if (response) {
        return res.status(400).json({ message: " Name already added " });
      } else {
       
        await pollingStationModel.create({
            pollingStationName,pollingStationAddress,agentName,agentPhoneNo,agentCnic
        });
        return  res.status(201).json({ message: "Registered successfully" });
      }
    } catch (error) {
      res.json(error + " Error occoured during adding  pollingStation ")
      console.log(error)

    }
  },
 
  findall:async (req,res)=>{
    // const{adminID}=req.params
    try {
      const response =  await pollingStationModel.findAll()
      res.json(response)
    } catch (error) {
      res.status(500).json({message:"Error occoured during finding"})
    }

  },
  update:async(req,res)=>{
    try {
        const{id}=req.params
    const {constituencyName, constituencyAddress } = req.body;
    const response = await pollingStationModel.findOne({
        where:{id}
    })
    if(!response){
        res.status(400).json({message:"pollingSation not found"})
    }else{
      if(response.constituencyName==constituencyName){
        return res.status(400).json({message:"Name already in use"})       
      }
      
        await pollingStationModel.update({constituencyName,constituencyAddress},{where:{id}})
        res.json({message:" Updated successfully"})
    }
        
    } catch (error) {
        res.json({message:"error finding polling Station" ,error})
    }
  },
  findOne:async(req,res)=>{
    const{id}=req.params
  try {
     const response=await pollingStationModel.findOne({
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
      const response =await pollingStationModel.findOne({where:{id}})
      if(!response){
        res.status(404).json({message:"admin not found"})
      }
      await pollingStationModel.destroy({where:{id}})
      res.status(200).json({message:"admin deleted successfully"})
      
    } catch (error) {
      res.status(404).json({message:"Error deleting admin"})
      console.log(error)
    }
  }

};


export default pollingStationController;
