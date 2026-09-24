import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next)=>{
    let token = req.headers.token
    jwt.verify(token,"itig3", (err,decoded)=>{
        if(err) return res.json({message:" wrong", err})
            req.decoded = decoded
            next()
    })
}