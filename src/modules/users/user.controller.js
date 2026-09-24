import { userModel } from "../../../db/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendEmail } from "../../utilities/emailServices.js"
import { AppError } from "../../middlewares/AppError.js"
   
let getUsers = async(req,res,next)=>{
    const users = await userModel.find()
    // if(!users) return next(new AppError("404", "users not found"))
    res.status(200).json({message:"All Users", users})
        }


let findUser = async(req,res,next)=>{
    const user = await userModel.findById(req.params.id)
        if(!user) return next(new AppError("user not found", 401))
            res.status(200).json({message:"user", user})

}
let addUser = async(req,res,next)=>{
  
     let foundedUser = await userModel.findOne({email:req.body.email})
    
    if(foundedUser) return res.status(409).json({message:"user already registered"})
        const hashed = bcrypt.hashSync(req.body.password,8)
    req.body.password = hashed
    userModel.insertMany(req.body)
        sendEmail(req.body.email)
     res.status(201).json({message:"user registered successfully"})
    
  
    }


let login = async(req,res)=>{
    const foundedUser = await userModel.findOne({email:req.body.email})
    if(!foundedUser) return res.json({message:"email or password is not correct"})
        const matched = bcrypt.compareSync(req.body.password, foundedUser.password)
    if(!matched) return res.json({message:"email or password is not correct"}) 
     if(!foundedUser.isConfirmed) return res.json({message:"please confirm your email"})
        let token = jwt.sign({_id:foundedUser._id, role: foundedUser.role}, "itig3")
        res.json({message:`welcome ${foundedUser.name}`, token})
    
       
}

let updateUser = async(req,res)=>{

    const updatedUser = await  userModel.findByIdAndUpdate(req.params.id , req.body,{new:true})
    res.status(200).json({message:"user updated successfully",updatedUser })
}


let deleteUser = async(req,res)=>{
            await userModel.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"user deleted successfully"})
    }


    const verifyAccount= (req,res)=>{
        jwt.verify(req.params.email,"emailIti", async (err,decoded)=>{
            if(err) return res.send("an error occurred while verify email")
              await userModel.findOneAndUpdate({email:decoded.email},{isConfirmed:true})
             res.send("mail confirmed")
            })
      

    }



    export{
        deleteUser,
        updateUser,
        getUsers,
        addUser,
        login,
        verifyAccount,
        findUser
    }