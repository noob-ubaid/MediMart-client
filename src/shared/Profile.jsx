import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const Profile = ({ anchorRef }) => {
  const { user, profile, setProfile, logOut } = useAuth();
  const menuRef = useRef(null);
  const [coords, setCoords] = useState({ top: 0, left: 0, right: 0, width: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const anchor = anchorRef?.current;
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      const top = rect.bottom + window.scrollY + 8;
      const right = window.innerWidth - rect.right - window.scrollX; 
      const width = 200; 
      const left = rect.right + window.scrollX - width;
      setCoords({ top, left: Math.max(8, left), right, width });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [anchorRef, profile]);

  useEffect(() => {
    const handle = (e) => {
      const menuEl = menuRef.current;
      const anchor = anchorRef?.current;
      if (menuEl && (menuEl === e.target || menuEl.contains(e.target))) return;
      if (anchor && (anchor === e.target || anchor.contains(e.target))) return;
      setProfile(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [anchorRef, setProfile]);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out");
      setProfile(false);
    } catch (err) {
      console.error(err);
      toast.error("Logout failed");
    }
  };

  if (!profile) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.18 }}
        style={{
          position: "absolute",
          top: coords.top,
          left: coords.left,
          width: coords.width,
          zIndex: 9999,
        }}
        className="rounded-md bg-gray-900 text-white shadow-lg p-4"
      >
        <p className="font-medium font-secondary flex items-center gap-2 mb-2 text-center">
          <FaUserAlt /> {user?.displayName || "User"}
        </p>

        <Link to="/dashboard" className="block font-secondary px-3 text-center py-2 rounded bg-gray-800 hover:bg-gray-700/60">
          Dashboard
        </Link>

        <button
          onClick={handleLogout}
          className="mt-3 w-full px-3 py-2 font-secondary rounded bg-primary"
        >
          Logout
        </button>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default Profile;
