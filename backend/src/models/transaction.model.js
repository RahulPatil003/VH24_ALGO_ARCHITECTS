import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    instituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institute",
    },
    donorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Donor",
    },
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
    status: {
      type: String,
      enum: ["successfully", "unsuccessfully"],
    },
  },
  { timestamps: true }
);

export const Transaction = mongoose.model("Transaction", transactionSchema);
