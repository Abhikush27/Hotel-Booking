const jwt = require('jsonwebtoken')

async function verify(req,res,next){
    try{
        const token = req.cookies.token
       
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
// const {token} = req.cookies;
// if(token){
//     jwt.verify(token,"abhikush",{},(err,user) =>{
//         if(err)
//         throw err;
//         res.json(user);
//     });

// } else{
//     res.json(null);
// }

// }

module.exports = {verify}