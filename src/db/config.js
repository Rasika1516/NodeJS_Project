import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/User");
    console.log("User connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed ", error.messages);
    process.exit(1);
  }
};

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/userLogin");
    console.log("UserLogin connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed ", error.messages);
    process.exit(1);
  }
};

export default {connectDB,connect};
