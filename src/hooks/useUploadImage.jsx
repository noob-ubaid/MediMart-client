import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const useUploadImage = async (image) => {
  if (!image) return toast.error("Upload your image");
  const imageData = new FormData();
  imageData.append("file", image);
  imageData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
  const { data: imgUrl } = await axios.post(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUD_NAME
    }/image/upload`,
    imageData
  );
  return imgUrl.secure_url;
};

export default useUploadImage;
