import asyncHandler from "express-async-handler";
import { Need } from "../models/need.model.js";
import { Institute } from "../models/institute.model.js";
import { Supplier } from "../models/supplier.model.js";
import { Feedback } from "../models/feedback.model.js";

export const raiseRequest = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { items } = req.body;
  console.log(req.body);
  const institute = await Institute.findById(id);
  if (!institute) {
    res.status(404).json({ message: "Institute not found" });
  }
  const newItems = await Need.create({
    instituteId: institute._id,
    items: items,
  });
  res.status(201).json({ message: "Request raised successfully", newItems });
});

export const giveFeedback = asyncHandler(async (req, res) => {
  const { supplierId } = req.params;
  const { id } = req.user;
  const { feedback, rating } = req.body;

  const supplier = await Supplier.findById(supplierId);
  if (!supplier) {
    return res.status(404).json({ message: "Supplier not found" });
  }

  // create new feedback
  const newFeedback = await Feedback.create({
    instituteId: id,
    supplierId: supplier._id,
    feedback,
    rating,
  });

  if (!newFeedback) {
    return res.status(500).json({ message: "Error while adding feeback" });
  }

  // calculate new rating
  const feedbacks = await Feedback.find(supplier._id);

  const totalRating = feedbacks.reduce((acc, feedback) => {
    return acc + feedback.rating;
  });

  const updatedRating = totalRating / feedbacks.length;

  supplier.rating = updatedRating;
  supplier.save();
});
