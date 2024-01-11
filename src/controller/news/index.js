import newsCommentsModel from "../../model/news/comment.js";
import newsModel from "../../model/news/index.js";
const newsController = {
  Add: async (req, res) => {
    const { newsTitle, newsPicture, newsContent } = req.body;
    
    // const{filename}=req.file
    try {
      await newsModel.create({
        newsTitle,
         newsPicture,
          newsContent,
          memberId : req.session.member.id,
          adminId : req.session.admin.id
      });
      res.status(201).json({ message: "Added  successfully" });
    } catch (error) {
      res.json(error + " Error occoured during adding an news");
    }
  },

  findall: async (req, res) => {
    
    try {
      const response = await newsModel.findAll(
        {include:[newsCommentsModel]}
      );
      res.json(response);
    } catch (error) {
      res.json(error)
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const {  newsTitle,newsPicture,newsContent, } = req.body;
    
      const response = await newsModel.findOne({
        where: { id},
      });
      if (!response) {
        res.status(400).json({ message: "news not found" });
      } else {

        await newsModel.update(
          { newsTitle,newsPicture,newsContent, },
          { where: { id } }
        );
        res.json({ message: " Updated successfully" });
      }
    } catch (error) {
      res.json({ message: "error updating news aaa", error });
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await newsModel.findOne({
        where: { id},
        include:{newsCommentsModel}
      });
      res.status(200).json({ response, message: "event found successfully" });
    } catch (error) {
      res.json({ message: "errror finding event", error });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await newsModel.findOne({ where: { id } });
      if (!response) {
        res.status(404).json({ message: "event not found" });
      }
      await newsModel.destroy({ where: { id: admin_id } });
      res.status(200).json({ message: "event deleted successfully" });
    } catch (error) {
      // res.status(404).json({message:"Error deleting admin"})
      console.log(error);
    }
  },
  updatelikes:async(req,res)=>{
    
    try {
        const {totalLikes}=req.body
        const{id} =req.params
        const data= await newsModel.findOne({
          where:{id}
        })
        if(!data){
          res.status(404).json({messsaga:"News not found"})
        }
         await newsModel.update({totalLikes},{where:{id}})
        
         res.json({message:"successfullty updated"}) 
      } catch (error) {
        res.json({message:error})
       
      }
  }
};

export default newsController;
