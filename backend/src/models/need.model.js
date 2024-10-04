import mongoose from "mongoose";

const needSchema = new mongoose.Schema(
  {
    instituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institute",
    },
    items: [
      {
        name: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        isFullfilled: {
          type: Boolean,
          default: false,
        },
        donations: [
          {
            donorId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Donor",
            },
            supplierId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Supplier",
            },
            quantity: {
              type: Number,
            },
            price: {
              type: Number,
            },
            status: {
              type: String,
              enum: ["pending", "delivered"],
              default: "pending",
            },
          },
        ],
        bids: [
          {
            supplierId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Supplier",
            },
            name: {
              type: String,
            },
            price: {
              type: Number,
            },
            deliveryTime: {
              type: Number,
            },
          },
        ],
      },
    ],
    isFullfilled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Need = mongoose.model("Need", needSchema);
