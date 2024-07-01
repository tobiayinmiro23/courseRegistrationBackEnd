const Course = require('../Models/Course');
const verifyToken=require('../HelperFunction/Authorization')
const Response=require('../HelperFunction/Response')

const addCourse=async (body,headers)=>{
    const {userid,token}=headers
    const {CourseCode,Semester,Nature}=body
     try{
            let reply= await verifyToken(userid,token)
        if(reply===true){
            // check if the course already exists before inserting a course
            const findCourse=await Course.find({LinkId:userid}).where({"data.CourseCode":CourseCode}).distinct('data.CourseCode')
            if(findCourse.length > 0) return Response(false,'course already exist') 
            if(Nature === 'elective'){ 
                // check if an elective course already exists before inserting a course ,users can have only one elective course in each semester
                let electiveCourseFilter=await Course.find({ LinkId:userid}).where({"data.Semester":Semester}).where({"data.Nature":'elective'})
                if(electiveCourseFilter.length > 0) return Response(false,'you can only add one elective course in each semester') 
            }
            let newCourse=await Course.create({
                LinkId:userid,
                data:body
            })
            if(newCourse?._id)return Response(true,'courses added successfully') 
            return Response(false,'unable to add course') 
        }
            return Response(false,reply) 
     }catch(error){
        if(error.name ==='ValidationError')return Response(false,error.message)  
        return Response(false,error?.message || error) 
     }
}

const addMultipleCourses=async (body,headers)=>{
    const {userid,token}=headers
     try{
        let reply= await verifyToken(userid,token)
        if(reply===true){
                // incase the user on the front end selects only one course with the multiple course checkbox
                let allElective=body.every((item)=> item.Nature=== 'elective' )
                if((allElective) && body.length===1){
                    const {Semester,CourseCode}=body[0]
                    const findCourse=await Course.find({LinkId:userid}).where({"data.CourseCode":CourseCode}).distinct('data.CourseCode')
                    if(findCourse.length > 0) return Response(false,'course already exist') 
                     // check if an elective course already exists before inserting a course ,users can have only one elective course in each semester
                     let electiveCourseFilter=await Course.find({ LinkId:userid}).where({"data.Semester":Semester}).where({"data.Nature":'elective'})
                    if(electiveCourseFilter.length > 0) return Response(false,'you can only add one elective course in each semester') 
                }
                for (let i=0; i < body.length; i++){
                const {CourseCode,Semester,Nature}=body[i]
                     // check if a course already exists before inserting a course
                    const findCourse=await Course.find({ LinkId:userid}).where({"data.CourseCode":CourseCode}).distinct('data.CourseCode')
                    if(findCourse.length > 0)continue
                    else if(Nature === 'elective'){
                    // check if an elective course already exists before inserting a course ,users can have only one elective course in each semester
                        let electiveCourseFilter=await Course.find({LinkId:userid}).where({"data.Semester":Semester}).where({"data.Nature":'elective'}).distinct('data.CourseCode')
                        if(electiveCourseFilter.length > 0)continue
                        else await Course.create({
                            LinkId:userid,
                            data: body[i]
                        })
                    }else await Course.create({
                            LinkId:userid,
                            data: body[i]
                        })
                }
                return Response(true,'courses added successfully')
        }
        return  Response(false,reply)
     }catch(error){
        if(error.name ==='ValidationError') return Response(false,error.message)  
        return Response(false,error?.message || error)
     }
}

const getAllCourse=async (body)=>{
    const {userid,token}=body
    try{
            // let reply=await verifyToken(userid,token)
            // if(reply===true){
                 const newCourse=await Course.find({LinkId:userid}).sort({"data.No":1})
                 if(newCourse.length > 0) return Response(true,newCourse)
                     return Response(false,'you have not yet registered any course')  
            // }
                // return  Response(false,reply)
     }catch(error){
      return Response(false,error?.message || error)
     }
}


const deleteCourse=async (req)=>{
    const {userId,token}=req.body
    let id=req.params.id
    try{
            let reply=await verifyToken(userId,token)
            if(reply === true){
                 const deletedCourse=await Course.findByIdAndDelete(id)
                 if(deletedCourse===null)return  Response(false,'id does not exist')
                 return  Response(true,'course successfully deleted')
            }else{
                return  Response(false,reply)
            }
     }catch(error){
          return Response(false,error?.message || error)
     }
}
module.exports ={addCourse,getAllCourse,deleteCourse,addMultipleCourses}