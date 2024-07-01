const {addCourse,getAllCourse,deleteCourse,addMultipleCourses} = require('../Services/Course')

const AddCourseController= async(req,res)=>{
    let reply=await addCourse(req.body,req.headers)
    res.json(reply)
}
const AddMultipleCourseController= async(req,res)=>{
    let reply=await addMultipleCourses(req.body,req.headers)
    res.json(reply)
}
const GetAllCourseController= async(req,res)=>{
    let reply=await getAllCourse(req.body)
    res.json(reply)
}
const DeleteCourseController= async(req,res)=>{
    let reply=await deleteCourse(req)
    res.json(reply)
    
}
module.exports={AddCourseController,GetAllCourseController,DeleteCourseController,AddMultipleCourseController}