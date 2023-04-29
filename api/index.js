const express =require('express')
const dotEnv= require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/User')

dotEnv.config();
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(
    cors({
        
        origin:process.env.CLIENT_URL,
    })
)

const PORT =4000;

app.post('/api/register',async(req,res)=>{
    
      try {
        const{username,email,number,address}=req.body;
     await User.create({username,email,number,address})
     res.send();
      } catch (error) {
        
      }

    

} )



app.listen(PORT,()=>{
    console.log("server is running")
})

