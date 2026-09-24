import  mongoose, { model, Schema } from "mongoose";


const noteSchema = new Schema({
    title:String,
    likes:Number,
    private: Boolean,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref: "User" 
    }
},{
    timestamps:true,
    versionKey:false
})

export const noteModel = model("Note", noteSchema)