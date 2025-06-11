import connectDB from "../db/config.js";
import { User } from "../db/models/user.js";
connectDB();

//Add user
export const addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.status(201).json(result);
    console.log("Record has been addedd successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get user list
export const getUser = async(req,res)=>{
  try {
    const user =await  User.find({});
    res.json(user);
    console.log("Records fetched successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get one user list
export const getOneUser = async(req,res)=>{
  try {
    const user =await  User.findById(req.params.id);
    res.json(user);
    console.log("Records fetched successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update the user
export const updateUser = async(req,res)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(updatedUser);
    console.log("Record has been updated successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

//delete the User
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: "Record has been deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}