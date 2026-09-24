


import { noteModel } from "../../../db/models/note.model.js";

let getAllNotes = async(req,res)=>{

    const notes = await noteModel.find({createdBy:req.decoded._id}).populate("createdBy")
    res.json({message:"All Notes", notes})
}


let addNote = (req ,res)=>{
            req.body.createdBy = req.decoded._id
            
        noteModel.insertMany(req.body)
        res.json({message:"note added"})
    }


let updateNote = async(req, res)=>{
    
let foundedNote =  await noteModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
    if(foundedNote) return res.json({message:"updated successfully",note: foundedNote})
        res.json({message:"can not find note with this id"})
}



let deleteNote = async(req ,res)=>{
    let foundedNote =await noteModel.findOneAndDelete({_id:req.params.id, createdBy:req.decoded._id})
     if(foundedNote) return res.json({message:"deleted successfully",note: foundedNote})
        res.json({message:"can not find note with this id"})
}



export{
    getAllNotes,
    addNote,
    updateNote,
    deleteNote
}