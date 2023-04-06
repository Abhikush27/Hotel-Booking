const jwt = require('jsonwebtoken')

async function verify(req,res,next){
    try{
        const token = req.cookies.token
       if(!token)  return res.status(401).json("unauthorized")
        const user = jwt.verify(token,"abhikush")
        if(!user) return res.status(401).json("unauthorized")
        if(user){
            req.user = user
            next()
        }
    
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

module.exports = {verify}