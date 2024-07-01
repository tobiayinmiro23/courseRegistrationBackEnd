const express = require('express');
const router=express.Router()
const {SigninController,LoginController,ForgotPasswordController,UpdateProfilePictureController,RememberMeController} =require('../Controllers/User')
const {AddCourseController,GetAllCourseController,DeleteCourseController,AddMultipleCourseController} =require('../Controllers/Course')


router.get('/','we are live !!!!!!1')
router.post('/signin',SigninController)
router.post('/login',LoginController)
router.get('/rememberMe',RememberMeController)
router.post('/addCourse',AddCourseController)
router.post('/addMultipleCourse',AddMultipleCourseController)
router.post('/allCourse',GetAllCourseController)
router.delete('/deleteCourse/:id',DeleteCourseController)
router.post('/forgotPassword',ForgotPasswordController)
router.post('/updateProfilePicture',UpdateProfilePictureController)

module.exports = router
