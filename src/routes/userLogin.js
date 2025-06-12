import express from 'express';
import {adduserLogin,updateuserLogin,getuserLogin,getOneuserLogin,deleteuserLogin} from '../controllers/userLogin.js';
const router = express.Router();

router.post("/adduerLogin",adduserLogin);

router.get("/getuserLogin",getuserLogin);

router.get("/getuserLogin",getOneuserLogin);

router.put("/updateUserLogin",updateuserLogin);

router.delete('/deleteUserLogin',deleteuserLogin);

export {router};
