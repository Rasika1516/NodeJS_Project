import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    typeOfJob: {
      type: String,
      required: true,
    },
    postedBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
  },
  { timestamps: true }
);

export const userLogin = mongoose.model("Job", jobSchema);
