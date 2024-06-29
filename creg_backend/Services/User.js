const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const User = require('../Models/User');
const hashPassword=require('../HelperFunction/Hash')
const verifyToken=require('../HelperFunction/Authorization')
const getCookie=require('../HelperFunction/CookieHandler')
const Response=require('../HelperFunction/Response')

 const Signin=async (body)=>{
    const{userName,password} =body
    let matricNum = Math.floor(Math.random() * 90000) + 10000;
     try{
        let hash=hashPassword(password)
           await User.create({
             userName,
             password:hash,
             matricNumber:`2024/1/${matricNum}CT`
         })
         return  Response(true,'user successfully created') 
     }catch(error){
        if(error.name ==='ValidationError') return Response(false,error.message) 
        if(error.code === 11000)return Response(false,'username is already taken') 
        return Response(false,error?.message || error) 
     }
}
const RememberMe= async(req)=>{
   try{
      const reply=getCookie(req)
      if(reply===null)return Response(false,'cookie does not exist') 
      let userName = jwt.verify(reply, "tobi's secrete")
       let userExists=await User.find({userName})
       if(userExists.length){
              let token = jwt.sign(userExists[0].userName, "tobi's secrete")
              let data={
                 id:userExists[0].id,
                 token,
                 username:userExists[0].userName,
                 photoUrl:userExists[0].photoUrl,
                 matricNumber:userExists[0].matricNumber
              }
              return Response(true,data)          
       }
          return Response(false,'user does not exists')
   }catch(error){
      return Response(false,error?.message || error)
   }
}
const  Login=async (req)=>{
    const{userName,password} =req.body
    try{
         let userExists=await User.find({userName})
         if(userExists.length){
            let verifyPassword=bcrypt.compareSync(password, userExists[0].password)
            if(verifyPassword){
                let token = jwt.sign(userExists[0].userName, "tobi's secrete")
                let data={
                   id:userExists[0].id,
                   token,
                   username:userExists[0].userName,
                   photoUrl:userExists[0].photoUrl,
                   matricNumber:userExists[0].matricNumber,
                }
                return  Response(true,data) 
            }
                return Response(false,'incorrect password')  
         }
            return Response(false,'user does not exists')  
     }catch(error){
        return Response(false,error?.message || error)
     }
}
const ForgotPassword=async (body,headers)=>{
    const{password} =body
    const {userid,token}=headers
    try{
         let reply= await verifyToken(userid,token)
       if(reply === true){
            let hash=hashPassword(password)
            const newUserInfo= await  User.findByIdAndUpdate(userid,{
                  password:hash
            })
            if(newUserInfo?._id) return Response(true,'password successfully changed')
            else return Response(false,'unable to change password')
       }
        return Response(false,reply)
     }catch(error){
      return Response(false,error?.message || error)
     }
}

const UpdateProfilePicture=async (body,headers)=>{
    const{photo} =body
    const {userid,token}=headers
    try{
         let reply= await verifyToken(userid,token)
       if(reply === true){
          await  User.findByIdAndUpdate(userid,{photoUrl:photo})
         const userInfo= await  User.findById(userid)
         let data={
               photo:userInfo.photoUrl
         }
         return Response(true,data)
       }
        return  Response(false,reply)
     }catch(error){
      return Response(false,error?.message || error)
     }
}
module.exports ={Signin,Login,ForgotPassword,UpdateProfilePicture,RememberMe}


