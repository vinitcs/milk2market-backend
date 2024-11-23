import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "Please enter product item name"],
      trim: true,
    },
    productIllustrationIconOrImage: {
      type: String, // cloudinary url
      required: [true, "Product illustration icon or image 'URL' is required"],
    },
    litre: {
      type: Number,
      default: 0,
      required: [true, "Please enter the product item litre"],
    },
    price: {
      type: Number,
      default: 0,
      required: [true, "Please enter the product item price"],
    },
    description: {
      type: String,
      required: [true, "Please enter the product item description"],
      trim: true,
    }, 
  },
  {
    timestamps: true,
  }
);

export const Product = model("Product", productSchema);
