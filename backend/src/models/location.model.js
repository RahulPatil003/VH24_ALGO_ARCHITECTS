import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  address: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  latitude: {
    type: Number,
  },
});

export default Location = mongoose.model("Location", locationSchema);
