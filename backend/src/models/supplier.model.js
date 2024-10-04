import mongoose from "mongoose";
import { Location } from "./location.model.js";

const supplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["grocery", "medical", "food", "cloth", "stationary"],
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

export default Supplier = mongoose.model("Supplier", supplierSchema);
