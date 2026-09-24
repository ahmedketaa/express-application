

export const errorHandling = (err,req,res,next)=>{
    res.status(err.StatusCode || 500).json({message: err.message, success:false})
}