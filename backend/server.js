const app=require('./app.js')
const dotenv=require("dotenv")
const connectDB=require('./config/database.js')
//Config
dotenv.config({path:"backend/config/config.env"})

//connecting to DB
 connectDB()
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

