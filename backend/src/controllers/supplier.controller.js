import asyncHandler from "express-async-handler";
import { Need } from "../models/need.model.js";
import { Supplier } from "../models/supplier.model.js";

export const addBid = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { needId, itemName, price, deliveryTime } = req.body;

  const need = await Need.findById(needId);
  if (!need) {
    return res.status(404).json({ message: "Need not found" });
  }

  needs.bids = [
    ...{
      supplierId: id,
      name: itemName,
      price,
      deliveryTime,
    },
  ];

  await need.save();
});
