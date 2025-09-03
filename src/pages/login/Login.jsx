import React from "react";
import login from "/login.png";
import { Link } from "react-router";
import Google from "../../shared/Google";
import Divider from "../../shared/Divider";
const Login = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center mb-8 justify-between gap-8 md:gap-24 lg:gap-64">
        <div className="">
          <img className="max-w-xl w-full mx-auto" src={login} alt="" />
        </div>
        <div className="px-4 md:px-0">
          <div className=" dark:bg-white p-4 max-w-md border border-[#0F0F0F26] rounded-md">
            <h2 className="text-2xl font-primary font-semibold mt-4 mb-2 border-b border-b-[#0F0F0F26] pb-4 text-center">
              Login Your Account
            </h2>
            <form>
              <label className="label text-[14px] font-secondary font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="input font-secondary border border-gray-300 rounded mt-1 p-1.5 outline-none w-full mb-2"
                placeholder="Email"
              />

              <label className="label text-[14px] font-secondary font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                className="input font-secondary border border-gray-300 rounded mt-1 p-1.5 outline-none w-full mb-2"
                placeholder="Password"
              />

              <div className="mt-2 flex justify-between">
                <label className="flex items-center font-secondary gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a className="link link-hover font-secondary">Forgot password?</a>
              </div>

              <button type="submit" className="bg-primary text-white py-2 rounded font-primary font-medium mt-4 w-full">
                Login
              </button>

              <p className="text-center text-[14px] font-secondary mt-2 font-medium">
                Don't have an account?{" "}
                <Link to="/register" className="text-red-400 underline">
                  Register
                </Link>
              </p>
            </form>
            <Divider/>
            <Google/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
