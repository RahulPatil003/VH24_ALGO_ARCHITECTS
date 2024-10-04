import asyncHandler from "express-async-handler";
import { Need } from "../models/need.model.js";
import { Donor } from "../models/donor.model.js";
import { Supplier } from "../models/supplier.model.js";
import { Feedback } from "../models/feedback.model.js";

export const donate = asyncHandler(async (req, res) => {});

export const getDonations = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const donations = await Need.find({
    "items.donations": { $elemMatch: { id } },
  }).populate(
    "instituteId items.donations.donorId items.donations.supplierId items.bids.supplierId"
  );

  if (!donations) {
    return res.status(500).json({ message: "Error will fetching donations" });
  }

  return res
    .status(200)
    .json({ message: "Donations fetched successfully", donations });
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
    donorId: id,
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
  await supplier.save();
});
