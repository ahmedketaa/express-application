import { userModel } from "../../db/models/user.model.js"


export const checkId = async(req,res,next)=>{

        let foundedUser = await userModel.findById(req.params.id)
        if(!foundedUser) return res.json({message:"user with this id not found"})
            next()
}