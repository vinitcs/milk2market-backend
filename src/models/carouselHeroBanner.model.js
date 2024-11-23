import { model, Schema } from "mongoose";

const carouselHeroBannerSchema = new Schema({
  carouselHeroBannerImage: [
    {
      type: String, // cloudinary url array list
      required: [true,"Carousel hero banner image is required"]
    },
  ],
});

export const CarouselHeroBanner = model("CarouselHeroBanner", carouselHeroBannerSchema);
