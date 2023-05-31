const mongoose=require("mongoose");
const DB="mongodb+srv://ashujimishra2003:1122334455@cluster0.lz2j3bf.mongodb.net/CRUD?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
    console.log("connection start")
).catch((error)=>
console.log(error.message));