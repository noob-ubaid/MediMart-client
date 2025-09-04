import React, { useState } from "react";
import Divider from "../../shared/Divider";
import Google from "../../shared/Google";
import useAuth from "../../hooks/useAuth";
import registerImg from "/signup.png";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { signUp, updateUserProfile, user, setUser } = useAuth();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const handleForm = async (data) => {
    try {
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
      const photo = imgUrl.secure_url;
      signUp(data.email, data.password)
        .then(async (result) => {
          const user = result.user;
          updateUserProfile({ displayName: data.name, photoURL: photo })
            .then(() => {
              toast.success("Successfully logged in");
              setUser({ ...user, displayName: data.name, photoURL: photo });
            })
            .catch((error) => {
              toast(error);
            });
          navigate(`${location.state ? location.state : "/"}`);
        })
        .catch((error) => {
          toast.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center mb-8 justify-between gap-8 md:gap-24 lg:gap-64">
          <div className="">
            <img
              className="max-w-2xl w-full mx-auto"
              src={registerImg}
              alt="register"
            />
          </div>
          <div className="px-4 md:px-0">
            <div className=" dark:bg-white p-4 max-w-md border border-[#0F0F0F26] rounded-md">
              <h2 className="text-2xl font-primary font-semibold mt-4 mb-2 border-b border-b-[#0F0F0F26] pb-4 text-center">
                Sign Up Your Account
              </h2>
              <form onSubmit={handleSubmit(handleForm)}>
                <label className="label text-[14px] font-secondary font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: "Name is required" })}
                  className="input font-secondary border border-gray-300 rounded mt-1 p-1.5 outline-none w-full mb-2"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 font-secondary w-full text-sm mt-0">
                    {errors.name.message}
                  </p>
                )}
                <label className="label text-[14px] font-secondary font-medium mb-1">
                  Upload your profile picture
                </label>
                <input
                  className="w-full py-1.5 rounded bg-gray-100 file-input file-input-bordered  font-secondary px-2 mt-1"
                  {...register("file", { required: "File is required" })}
                  name="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                />
                <label className="label text-[14px] font-secondary font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="input font-secondary border border-gray-300 rounded mt-1 p-1.5 outline-none w-full mb-2"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 font-secondary w-full text-sm mt-0">
                    {errors.email.message}
                  </p>
                )}

                <label className="label text-[14px] font-secondary font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be 8 characters or above",
                    },
                  })}
                  className="input font-secondary border border-gray-300 rounded mt-1 p-1.5 outline-none w-full mb-2"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 font-secondary w-full text-sm mt-0">
                    {errors.password.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="bg-primary cursor-pointer text-white py-2 rounded font-primary font-medium mt-4 w-full"
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
