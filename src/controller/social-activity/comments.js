import socialActivityCommentsModel from "../../model/social activity/comment.js";

const socialCommentController ={

    add:async(req,res)=>{
        try {
            const {comments}=req.body
           const response= await socialActivityCommentsModel.create({
                totalComments:comments
            })
            console.log(response)
            if(response){
               return res.json({message:"comment added successfully"})
            }
            throw new Error("error occour during adding  comment")

        } catch (error) {
            return res.status(400).json(error)
        }
    }
}
export default socialCommentController