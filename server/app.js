require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
require("./db/config");
const USER=require("./model/userSchema");
const cors=require("cors");
const router=require("./routes/routes")


const port=8003;
app.use(cors());
app.use(express.json());
app.use(router);

const DB="mongodb+srv://ashujimishra2003:1122334455@cluster0.lz2j3bf.mongodb.net/CRUD?retryWrites=true&w=majority"

app.listen(port,()=>{
    console.log(`server run at port ${port}`);
})
