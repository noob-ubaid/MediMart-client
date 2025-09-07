import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import { userDB } from "../lib/userDb";
const Google = () => {
  const { google } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const googleLogin = () => {
    google()
      .then(async (result) => {
        const newUser = result.user;
        toast.success("Successfully logged in");
        navigate(`${location.state ? location.state : "/"}`);
        const userData = {
          name: newUser.displayName,
          email: newUser.email,
          photo: newUser.photoURL,
          role : 'user',
          createdAt: new Date().toISOString(),
        };
        await userDB(userData);
      })
      .catch((error) => toast.error(error));
  };
  return (
    <button
      onClick={googleLogin}
      className="flex items-center cursor-pointer justify-center mb-1 py-1.5 rounded gap-2 w-full border border-gray-700 text-center"
    >
      <FcGoogle size={22} />
      <span className="font-primary text-white font-bold ">
        Login With Google
      </span>
    </button>
  );
};

export default Google;
