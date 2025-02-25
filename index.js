const express = require('express');
const connectDB = require('./db.');
const app = express();
require('dotenv').config();
const router = require('./router')

app.use(express.json())
app.use('/api',router)

app.listen(process.env.PORT,async()=>{
    try{
        await connectDB();
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
    }catch(error){
        console.error(error.message)
    }
})
