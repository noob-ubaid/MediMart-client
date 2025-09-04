import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import loginImage from "/login.png";
import Divider from "../../shared/Divider";
import Google from "../../shared/Google";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center justify-center   w-full">
        {/* Left Side - Image */}
        <div className=" md:w-1/2 w-full ">
          <img
            src={loginImage}
            alt="Login"
            className="max-w-xl w-full h-auto mx-auto "
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="dark:bg-white min-h-[450px] mx-auto p-4 max-w-md border border-[#0F0F0F26] rounded-md">
            <h2 className="text-2xl font-primary  font-semibold mt-4 mb-2 border-b border-b-[#0F0F0F26] pb-4 text-center">
              Login Your Account
            </h2>
            <form className="w-full " onSubmit={handleSubmit(handleForm)}>
              <label className="label text-[14px] font-secondary font-medium mb-1">
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                className="input font-secondary border border-gray-300 rounded mt-1 p-1.5 outline-none w-full mb-2"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 font-secondary w-full text-sm mt-1">
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
                <p className="text-red-500 font-secondary w-full text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

              <div className="mt-2 flex justify-between">
                <label className="flex items-center font-secondary text-[15px] sm:text-base gap-1 md:gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a className="link link-hover text-[15px] sm:text-base font-secondary">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="bg-primary cursor-pointer text-white py-2 rounded font-primary font-medium mt-4 w-full"
              >
                Login
              </button>

              <p className="text-center text-[14px] font-secondary mt-2 font-medium">
                Don't have an account?{" "}
                <Link to="/register" className="text-red-400 underline">
                  Register
                </Link>
              </p>
            </form>
            <Divider />
            <Google />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
