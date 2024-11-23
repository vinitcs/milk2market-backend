import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath, folderName) => {
  try {
    if (!localFilePath) return null; // add error msg further
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: folderName, // Specify the folder name of "Media Explorer" in cloudinary 
      resource_type: "auto",
    });
    // file has been uploaded successfull
    console.log("File is uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //'Sync' => must execute
    //remove the locally saved temporary file as the upload operation got failed
    return null; // add error msg further
  }
};

export { uploadOnCloudinary };
