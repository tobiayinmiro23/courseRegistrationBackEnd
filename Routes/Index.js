const express = require('express');
const router = express.Router()
const { SigninController, LoginController, GetPhotoController, ForgotPasswordController, UpdateProfilePictureController } = require('../Controllers/User')
const { AddCourseController, GetAllCourseController, DeleteCourseController, AddMultipleCourseController } = require('../Controllers/Course')

router.get('/', (req, res) => res.send('<h1>we are live !!!!!!</h1>'))
router.post('/signin', SigninController)
router.post('/login', LoginController)
router.post('/getPhoto', GetPhotoController)
// router.get('/rememberMe',RememberMeController)
router.post('/addCourse', AddCourseController)
router.post('/addMultipleCourse', AddMultipleCourseController)
router.post('/allCourse', GetAllCourseController)
router.delete('/deleteCourse/:id', DeleteCourseController)
router.post('/forgotPassword', ForgotPasswordController)
router.post('/updateProfilePicture', UpdateProfilePictureController)

module.exports = router
