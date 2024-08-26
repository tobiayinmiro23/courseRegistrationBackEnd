const { Signin, Login, ForgotPassword, UpdateProfilePicture, GetPhoto } = require('../Services/User')

const SigninController = async (req, res) => {
    let reply = await Signin(req.body)
    res.json(reply)
}

const LoginController = async (req, res) => {
    let reply = await Login(req)
    // let oneweek = 4 * 24 * 3600 * 1000
    // let options = {
    //     // maxAge: 1000 * 60 * 1, // expire after 1 minutes
    //     maxAge: oneweek, // expire after 5 days
    //     httpOnly: true, // Cookie will not be exposed to client side code
    //     sameSite: "none", // If client and server origins are different
    //     secure: true // use with HTTPS only
    // }
    res.json(reply)
    // if((req.body.checked)  &&  reply.message.id) res.cookie( "sptoken", reply.message.token, options ).json(reply)
    // else  res.json(reply)
}
// const RememberMeController = async (req, res) => {
//     const reply = await RememberMe(req)
//     res.json(reply)
// }

const ForgotPasswordController = async (req, res) => {
    let reply = await ForgotPassword(req.body, req.headers)
    res.json(reply)
}

const UpdateProfilePictureController = async (req, res) => {
    let reply = await UpdateProfilePicture(req.body, req.headers)
    res.json(reply)
}

const GetPhotoController = async (req, res) => {
    let reply = await GetPhoto(req)
    res.json(reply)
}

module.exports = { SigninController, LoginController, ForgotPasswordController, UpdateProfilePictureController, GetPhotoController }
