import { Router } from "express";
import * as rh from "./requestHandler.js"
import Auth from "./middleware/auth.js";


const router = Router()
router.route('/getuser').get(Auth,rh.getUser)
router.route('/getuserdata').get(Auth,rh.getUserData)
router.route('/adduserdata').post(rh.addUserData)
router.route('/deleteuser/:_id').delete(rh.deleteData)


router.route('/signup').post(rh.signUp)
router.route("/signin").post(rh.signIn)
router.route("/checkemail").post(rh.checkEmail)



export default router;