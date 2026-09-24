import express from 'express'
import { dbConnection } from './db/dbConnection.js'
import { userRoutes } from './src/modules/users/users.routes.js'
import { noteRoutes } from './src/modules/notes/notes.routes.js'
import { AppError } from './src/middlewares/AppError.js'
import { errorHandling } from './src/middlewares/errorHandoing.js'
import cors from "cors";



dbConnection
const app = express()

app.use(cors());

app.use(userRoutes)

app.use(noteRoutes)



let x = true
const isAuth = (req,res,next)=>{
    if(x){
        req.ahmed ="ahmed named mosfo"
        next()
    }else{
        res.send("faild")
    }
}
 
// sendEmail() 


app.get("/", isAuth ,(req, res)=>{
    console.log(req.ahmed,"sf");
    
    res.json({message:"hello world"})
})

app.use((req,res,next)=>{
    next(new AppError("url not found", 404))
})

// app.all('*',(req,res,next)=>{
//     next(new AppError("url not found",404))
// })

app.use(errorHandling)


app.listen(3000, ()=>console.log("server running"))