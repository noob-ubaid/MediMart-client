import React from "react";
import useAuth from "../hooks/useAuth";
import { AnimatePresence, motion } from "motion/react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, profile, logOut } = useAuth();
  const signOut = async () => {
    try {
      await logOut();
      toast.success("Log out successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
      <AnimatePresence>
        {profile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24 }}
            className="absolute right-0 mt-2 space-y-2 bg-gray-900 text-white rounded-md shadow-lg w-48 p-4 z-50"
          >
            <p className="font-medium flex items-center gap-2 mb-2 text-center">
              <FaUserAlt /> {user.displayName}
            </p>
            <Link
              to="/dashboard"
              className="block px-4 py-2 hover:bg-gray-100 bg-[#14213d] font-medium hover:text-black duration-300 text-center rounded"
            >
              Dashboard
            </Link>
            <button
              onClick={signOut}
              className="block w-full px-4 cursor-pointer text-white py-2 bg-primary font-main duration-300 text-center rounded"
            >
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
