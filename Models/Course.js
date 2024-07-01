const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    LinkId:{
        type:String,
        required:true,
        },
        data:{
            CourseCode:{
                type:String,
                required:true,
                },
            CourseTitle:{
                type:String,
                required:true,
                },
            Nature:{
                type:String,
                required:true,
                enum:['core','elective']   
            },
            No:{
                type:Number,
                required:true,
            },
            Semester:{
                type:String,
                required:true,
                enum:['1ST','2ND']   
            },
            Unit:{
                type:Number,
                required:true,
                enum:[1,2,3]   
            }
           }
        
 
});
const Course = mongoose.model('Course', CourseSchema);
module.exports = Course
