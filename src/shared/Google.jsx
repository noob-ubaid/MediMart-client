import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
const Google = () => {
  const {google} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const googleLogin = () => {
    google()
    .then(result => {
      const newUser = result.user
      toast.success('Successfully logged in')
      navigate(`${location.state ? location.state : '/'}`)
    })
    .catch(error => toast.error(error))
  }
  return (
    <button onClick={googleLogin} className="flex items-center cursor-pointer justify-center mb-1 py-1.5 rounded gap-2 w-full border border-gray-700 text-center">
      <FcGoogle size={22} />
      <span className="font-primary text-white font-bold ">
        Login With Google
      </span>
    </button>
  );
};

export default Google;
