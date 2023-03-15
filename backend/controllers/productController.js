const Product=require('../Models/productModel.js')


//Create Product --Admin
createProduct=async(req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}

// Get ALL Products
getAllProducts=async(req,res)=>{
    const product=await Product.find()
    res.status(200).json({
        success:true,
        product
    })
}


//Update Product ---Admin
const updateProduct=async(req,res,next)=>{
    let product=await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({success:false,message:"Product not found"})
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false})
    res.status(200).json({
        success:true,
        product
    })
}

//Delete Product 
const deleteProduct=async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({success:false,message:"Product not found"})
    }
    await product.remove()
    res.status(200).json({
        status:true,
        message:"Product deleted succesfully"
    })
}
module.exports={getAllProducts,createProduct,updateProduct,deleteProduct}