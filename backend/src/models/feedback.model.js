import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  instituteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute",
  },
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
  },
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
  },
  feedback: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

export const Feedback = mongoose.model("Feedback", feedbackSchema);
