const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    mobile: {
        type: Number,
        required: true
    },
    hobbies: {
        type: String,
        required: true
    },
   
});

const users = new mongoose.model("USER",userSchema);


module.exports = users;