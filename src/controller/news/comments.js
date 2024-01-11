import newsCommentsModel from "../../model/news/comment.js"

const newsCommentsController ={
add: async (req,res)=>{
        const{comments}=req.body
        try {
            const  response = await newsCommentsModel.create({comments})
            res.json({message:"comment added successfully"})
            
        } catch(error){
         res.json({message:"aaa",error})   
        //  console.log(error);
        }
    }
}


export default newsCommentsController