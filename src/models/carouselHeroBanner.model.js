import { model, Schema } from "mongoose";

const carouselHeroBannerSchema = new Schema({
  carouselHeroBannerImage: [
    {
      imgName: {
        type: String,
        required: [true, "Carousel hero banner image name is required"],
      },
      imgUrl: {
        type: String, // cloudinary url
        required: [true, "Carousel hero banner image is required"],
      },
    },
  ],
});

export const CarouselHeroBanner = model(
  "CarouselHeroBanner",
  carouselHeroBannerSchema
);
