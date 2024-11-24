import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  productIllustrationIconOrImage: [
    {
      imgName: {
        type: String,
        required: [true, "Product illustration icon or image name is required"],
      },
      imgUrl: {
        type: String, // cloudinary url
        required: [true, "Product illustration icon or image is required"],
      },
    },
  ],
});

export const Category = model("Category", categorySchema);
