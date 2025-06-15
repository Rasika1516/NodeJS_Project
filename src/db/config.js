import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MyDatabase");
    console.log("User connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed ", error.messages);
    process.exit(1);
  }
};

export const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/userLogin");
    console.log("UserLogin connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed ", error.messages);
    process.exit(1);
  }
};
