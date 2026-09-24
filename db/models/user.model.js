import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:{
        required: true,
        unique: true,
        type:String
    },
    password:String,
    isConfirmed: {
        type: Boolean,
        default:false
    },
    role:{
        type:String,
        enum: ['admin', 'user'],
        default:"user"
    }
},{
    timestamps:true,
    versionKey:false
})

export const userModel = mongoose.model("User", userSchema)