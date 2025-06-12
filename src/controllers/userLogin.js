import connect from "../db/config.js";
import { userLogin } from "../db/models/userLogin.js";
connect();

//Add userLogin
export const adduserLogin = async (req, res) => {
  try {
    const newuserLogin = new userLogin(req.body);
    const result = await newuserLogin.save();
    res.status(201).json(result);
    console.log("Record has been addedd successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get userLogin list
export const getuserLogin = async(req,res)=>{
  try {
    const userLogin =await  userLogin.find({});
    res.json(userLogin);
    console.log("Records fetched successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get one userLogin list
export const getOneuserLogin = async(req,res)=>{
  try {
    const userLogin =await  userLogin.findById(req.params.id);
    res.json(userLogin);
    console.log("Records fetched successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update the userLogin
export const updateuserLogin = async(req,res)=>{
  try {
    const updateduserLogin = await userLogin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(updateduserLogin);
    console.log("Record has been updated successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

//delete the userLogin
export const deleteuserLogin = async (req, res) => {
  try {
    await userLogin.findByIdAndDelete(req.params.id);
    res.send({ message: "Record has been deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}