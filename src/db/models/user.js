import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userAddressLine1: {
      type: String,
      required: true,
    },
    userAddressLine2: {
      type: String,
      required: true,
    },
    userPhno: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
