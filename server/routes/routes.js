const express=require("express");
const router=express.Router();
const USER=require("../model/userSchema");
const nodemailer = require("nodemailer");

router.get("/",(req,res)=>{
    console.log("connect");
}); 

router.post("/form",async(req,res)=>{
     //console.log(req.body);
    const {name,email,mobile,hobbies} = req.body;

    if(!name || !email || !mobile || !hobbies){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const preuser = await USER.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const addUSER = new USER({
                name,email,mobile,hobbies
            });

            await addUSER.save();
            res.status(201).json(addUSER);
            console.log(addUSER);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})

// get userdata

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await USER.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})
// get individual user data

router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await USER.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

// update user data

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await USER.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

// delete user
router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await USER.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})
//send msg

// router.get("/sendmail",async(req,res)=>{
    
   

//     let testAccount = await nodemailer.createTestAccount();

//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
       
//         auth: {
//             user: 'ellie.pfeffer6@ethereal.email',
//              pass: 'x2HVkrxBZEdqammVpd'
//          //nerated ethereal password
//         },
//       });
//       let info = await transporter.sendMail({
//         from: '"Jyotiraditya mishra 👻" <ellie.pfeffer6@ethereal.email>', // sender address
//         to: "ashujimishra2003@gmail.com", // list of receivers
//         subject: "Hello mishra", // Subject line
//         text: "Hello how are you", // plain text body
//         html: userindividual, // html body
//       });

//       console.log("Message sent: %s", info.messageId);
//       res.send(info); 
    
//  })


module.exports = router;
