import asyncHandler from "express-async-handler";
import { Need } from "../models/need.model.js";

export const getNeeds = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const needs = await Need.find();

  if (!needs) {
    return res.status(500).json({ message: "Error while fetching needs" });
  }

  return res.status(200).json({ message: "Needs fetched successfully", needs });
});


