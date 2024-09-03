const User = require('../Models/User');
const jwt = require('jsonwebtoken')

const verifyToken= async(id,token)=>{
        try{
            let userExists=await User.findById(id)
         console.log(userExists,'userExists')
                
            if(userExists?.id){
                let valid = jwt.verify(token, process.env.SECRETEKEY)
                console.log(valid,'valid')
                console.log(process.env.SECRETEKEY)
                if(valid===userExists.userName)return true
                 return 'unauthorised'
            }
                return 'cannot acces this route user does not exist'
        }catch(err){
            console.log(err)
            if(err.name === 'JsonWebTokenError') return err.message
            if(err.name === 'CastError') return 'you are not authorized to access this route'
            return err?.message || err
       }
    }


module.exports=verifyToken
