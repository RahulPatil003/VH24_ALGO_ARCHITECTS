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
        amount: {
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
            amount: {
              type: Number,
            },
            quantity: {
              type: Number,
            },
            status: {
              type: String,
              enum: ["pending", "delivered"],
              default: "pending",
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

export default Need = mongoose.model("Need", needSchema);
