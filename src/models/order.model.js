import { model, Schema, Types } from "mongoose";

const orderSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        productId: {
          type: Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
          required: true,
        },
        planType: {
          type: String,
          enum: ["One Time", "Monthly"],
        },
        monthlyStartDate: {
          type: Date,
        },
        monthlyEndDate: {
          type: Date,
        },
        status: {
          type: String,
          enum: ["Processing", "Shipped", "Delivered"],
          default: "Processing",
        },
        orderDate: {
          type: Date,
          default: Date.now,
        },
        shippingAddress: {
          address: {
            type: String,
            required: true,
            trim: true,
          },
          city: {
            type: String,
            required: true,
            trim: true,
          },
          pinCode: {
            type: Number,
            required: true,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Order = model("Order", orderSchema);
