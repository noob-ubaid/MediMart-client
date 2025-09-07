import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import loginImage from "/login.png";
import Divider from "../../shared/Divider";
import Google from "../../shared/Google";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import ForgotPasswordModal from "../../shared/ForgotPasswordModal";
import { Button } from "@headlessui/react";
import Logo from "../../shared/Logo";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully logged in");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => toast.error("Something went wrong"));
  };
  function open() {
    setIsModalOpen(true);
  }

  function close() {
    setIsModalOpen(false);
  }
  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="pt-6">
        <Logo />
      </div>
      <div className=" flex items-center lg:h-[calc(100vh-80px)] justify-center">
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
          <div className="w-full border lg:w-1/2 p-4">
            <div className="bg-neutral-900 min-h-[450px] mx-auto p-4 max-w-md border border-gray-700 rounded-md">
              <h2 className="text-2xl text-white font-primary  font-semibold mt-4 mb-2 border-b border-b-gray-700 pb-4 text-center">
                Login Your Account
              </h2>
              <form className="w-full " onSubmit={handleSubmit(handleForm)}>
                <label className="label text-white  text-[14px] font-secondary font-medium mb-1">
                  Email
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  className="input font-secondary border text-white border-gray-700  rounded mt-1 p-1.5 outline-none w-full mb-2"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 font-secondary w-full text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}

                <label className="label text-[14px] text-white font-secondary font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={isOpen ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be 8 characters or above",
                      },
                    })}
                    className="input font-secondary text-white border border-gray-700 rounded mt-1 p-1.5 outline-none w-full mb-2"
                    placeholder="Password"
                  />
                  {!isOpen ? (
                    <IoEye
                      onClick={() => setIsOpen(true)}
                      className="absolute right-4 top-3 cursor-pointer"
                      color="white"
                      size={21}
                    />
                  ) : (
                    <IoEyeOff
                      onClick={() => setIsOpen(false)}
                      className="absolute right-4 top-3 cursor-pointer"
                      color="white"
                      size={21}
                    />
                  )}
                </div>
                {errors.password && (
                  <p className="text-red-500 font-secondary w-full text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}

                <div className="mt-2 flex justify-between">
                  <label className="flex items-center text-white font-secondary text-[14px] sm:text-base gap-1 md:gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    Remember me
                  </label>
                  <Button
                    type="button"
                    onClick={open}
                    className="link link-hover cursor-pointer text-white text-[14px] sm:text-base font-secondary"
                  >
                    Forgot password?
                  </Button>
                </div>
                <button
                  type="submit"
                  disabled={!isChecked}
                  className={`${
                    isChecked
                      ? "bg-primary cursor-pointer"
                      : "bg-primary/30 cursor-not-allowed"
                  }  text-white py-2 rounded font-primary font-medium mt-4 w-full`}
                >
                  Login
                </button>

                <p className="text-center text-white text-[14px] font-secondary mt-2 font-medium">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-red-400 underline">
                    Register
                  </Link>
                </p>
              </form>
              {isModalOpen && (
                <ForgotPasswordModal
                  open={open}
                  close={close}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}

              <Divider />
              <Google />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
