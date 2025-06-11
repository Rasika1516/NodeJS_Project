import connectDB from "../db/config.js";
import { User } from "../db/models/user.js";
connectDB();

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
