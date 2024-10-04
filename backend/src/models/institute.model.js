import mongoose from "mongoose";
import { Location } from "./location.model.js";

const instituteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["ngo", "orphanage", "welfare", "rehabilitaion", "charity"],
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

export default Institute = mongoose.model("Institute", instituteSchema);
