import express from "express";
import { addUser,getUser,updateUser ,deleteUser,getOneUser} from "../controllers/user.js";

const router = express.Router();

//add API
router.post("/addUser", addUser);

//get API
router.get("/getUser",getUser);

//get API
router.get("/getUser/:id",getOneUser);

//update API
router.put("/updateUser/:id",updateUser);

//delete API
router.delete("/deleteUser/:id",deleteUser);

export { router };
