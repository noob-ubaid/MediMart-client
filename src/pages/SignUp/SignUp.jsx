import React, { useState } from "react";
import Divider from "../../shared/Divider";
import Google from "../../shared/Google";
import register from "/signup.png";
import { Link } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";

const SignUp = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('')
  const handleImageUpload = async () => {
    try {
      if (!image) return toast.error("Upload your image");
      const imageData = new FormData();
      imageData.append("file", image);
      imageData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
      imageData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);
      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`,
        imageData
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center mb-8 justify-between gap-8 md:gap-24 lg:gap-64">
          <div className="">
            <img className="max-w-2xl w-full mx-auto" src={register} alt="" />
          </div>
          <div className="px-4 md:px-0">
            <div className=" dark:bg-white p-4 max-w-md border border-[#0F0F0F26] rounded-md">
              <h2 className="text-2xl font-primary font-semibold mt-4 mb-2 border-b border-b-[#0F0F0F26] pb-4 text-center">
                Sign Up Your Account
              </h2>
              <form onSubmit={handleForm}>
                <label className="label text-[14px] font-secondary font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="input font-secondary border border-gray-300 rounded mt-1 p-1.5 outline-none w-full mb-2"
                  placeholder="Enter your name"
                />
                <label className="label text-[14px] font-secondary font-medium mb-1">
                  Upload your profile picture
                </label>
                <input
                  className="w-full py-1.5 rounded bg-gray-100 font-secondary px-2 mt-1"
                  required
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                />
                <label className="label text-[14px] font-secondary font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="input font-secondary border border-gray-300 rounded mt-1 p-1.5 outline-none w-full mb-2"
                  placeholder="Email"
                />

                <label className="label text-[14px] font-secondary font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="input font-secondary border border-gray-300 rounded mt-1 p-1.5 outline-none w-full mb-2"
                  placeholder="Password"
                />

                <button
                  onClick={handleImageUpload}
                  type="submit"
                  className="bg-primary text-white py-2 rounded font-primary font-medium mt-4 w-full"
                >
                  Sign Up
                </button>

                <p className="text-center text-[14px] font-secondary mt-2 font-medium">
                  Already have an account?{" "}
                  <Link to="/login" className="text-red-400 underline">
                    Login
                  </Link>
                </p>
              </form>
              <Divider />
              <Google />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
