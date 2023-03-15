const express=require('express')
const app=express()
app.use(express.json())
const {getAllProducts,createProduct,updateProduct,deleteProduct}=require('./controllers/productController.js')


//Routes

app.get('/',getAllProducts)

app.post('/product/new',createProduct)
app.put('/product/:id',updateProduct)
app.delete('/product/:id',deleteProduct)
module.exports=app