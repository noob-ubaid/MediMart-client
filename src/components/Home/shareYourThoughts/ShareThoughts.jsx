import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router";
import MainTitle from "../../../shared/MainTitle";
import useAuth from "../../../hooks/useAuth";
import { motion } from "framer-motion";

const ShareThoughts = () => {
  const { user } = useAuth();
  const [value, setValue] = React.useState(1);
  const [feedback, setFeedback] = React.useState("");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const handleSubmit = e => {
    e.preventDefault()
    
  }

  return (
    <section className="py-12">
      {/* Main section title */}
      <MainTitle text="Share your valuable thoughts" />

      {/* Feedback card with linear gradient + animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 md:mt-12 p-6 md:p-10 backdrop-blur-2xl bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-800/90 border border-white/[0.2] rounded-2xl shadow-lg"
      >
        {/* Subtitle / description */}
        <motion.p
          variants={itemVariants}
          className="text-center text-white/80 font-secondary max-w-2xl pb-4 mx-auto"
        >
          Help us improve by sharing your experience with our pharmacy services.
        </motion.p>

        {/* Rating section */}
        <motion.div variants={itemVariants} className="mt-4">
          <p className="text-white font-secondary text-lg">
            How would you rate your experience?
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Box sx={{ "& > legend": { mt: 2 } }}>
              <Rating
                name="customized-empty"
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                precision={1}
                icon={<StarIcon fontSize="inherit" />}
                emptyIcon={
                  <StarIcon
                    fontSize="inherit"
                    sx={{ color: "rgba(255,255,255,0.3)" }}
                  />
                }
                sx={{
                  color: "#FFD700",
                  fontSize: 32,
                }}
              />
            </Box>
            <span className="text-white font-primary text-lg">
              ({value} star{value > 1 ? "s" : ""})
            </span>
          </div>
        </motion.div>

        {/* Feedback textarea */}
        <motion.form onSubmit={handleSubmit} variants={itemVariants} className="mt-4">
          <p className="text-white font-secondary text-lg">Your Feedback</p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full border border-white/[0.2] mt-2 rounded-md bg-black/20 text-white p-3 font-primary focus:outline-none focus:border-white/70 placeholder-white/50 backdrop-blur-md"
            rows={5}
            placeholder="Write your feedback..."
          ></textarea>

          {/* Submit button */}
          {user ? (
            <button
              type="submit"
              className="bg-white/90 text-black py-3 w-full rounded font-primary mt-4 hover:bg-white/100 transition"
            >
              Submit
            </button>
          ) : (
            <Link
              to="/login"
              className="block bg-white/90 text-black text-center py-3 w-full rounded font-primary mt-4 hover:bg-white/100 transition"
            >
              Login to submit
            </Link>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ShareThoughts;
