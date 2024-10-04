import mongoose from "mongoose";

const instituteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["ngo", "orphanage", "welfare", "rehabilitation", "charity"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phNo: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
    },
  },
  { timestamps: true }
);

export const Institute = mongoose.model("Institute", instituteSchema);
