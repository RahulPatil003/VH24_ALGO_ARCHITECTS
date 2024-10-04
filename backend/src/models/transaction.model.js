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
    needId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Need",
    },
    status: {
      type: String,
      enum: ["successfull", "unsuccessfull"],
    },
  },
  { timestamps: true }
);

export const Transaction = mongoose.model("Transaction", transactionSchema);
