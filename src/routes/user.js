import express from "express";
import { addUser,getUser,updateUser ,deleteUser,getOneUser} from "../controllers/user.js";

const userLoginuserLoginRouter = express.userLoginRouter();

//add API
userLoginRouter.post("/addUser", addUser);

//get API
userLoginRouter.get("/getUser",getUser);

//get API
userLoginRouter.get("/getUser/:id",getOneUser);

//update API
userLoginRouter.put("/updateUser/:id",updateUser);

//delete API
userLoginRouter.delete("/deleteUser/:id",deleteUser);

export { userLoginRouter };
