import mongoose from "mongoose";

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
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Supplier = mongoose.model("Supplier", supplierSchema);
