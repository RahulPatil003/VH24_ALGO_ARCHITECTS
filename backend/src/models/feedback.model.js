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
  feedback: {
    type: String,
  },
});

export default Feedback = mongoose.model("Feedback", feedbackSchema);
