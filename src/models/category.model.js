import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  productIllustrationIconOrImage: [
    {
      type: String, // cloudinary url array list
      required: [true,"Product illustration icon or image is required"]
    },
  ],
});

export const Category = model("Category", categorySchema);
