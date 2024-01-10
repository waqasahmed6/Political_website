import productModel from "../../model/members/index.js";

const productController = {
  create: async (req, res) => {
    try{
    const { productName,  productStock, productPrice } = req.body;
     const {filename}=req.file
     console.log(filename)
     
 await productModel.create({
        productName,  productStock, productPrice ,imagePath:filename
    });
    
  res.status(201).json({ message: "product created successfully" ,link:`http://localhost:3301/productImage/${req.file.filename}`}); 
}catch(err){
    res.json({message:"errror creating product "+err})
}
  },
  delete:async (req,res)=>{
    try {
        const{id}=req.params
        await productModel.destroy({
            where:{id}
        })
        res.status(200).json({message:"product deleted successfully"})
    } catch (error) {
        
    }
  },
  update:async(req,res)=>{
    try {
        const{id}=req.params
    const {productName, productImage, productStock, productPrice } = req.body;
    const response = await productModel.findOne({
        where:{id}
    })
    if(!response){
        res.json({message:"product not found"})
    }else{
        await productModel.update({productName, productImage, productStock, productPrice },{where:{id}})
        res.json({message:"product updated successfully"})
    }
        
    } catch (error) {
        res.json({message:"error updating product" ,error})
    }
  },getAll:async(req,res)=>{
    try {
     const products = await productModel.findAll({})
      res.status(200).json({message:"products found",products})
    } catch (error) {
      res.status(400).json({message:"not found",error})
    }
  }

}
export default productController