// import * as React from "react";
// import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";
// import MainTitle from "../../../shared/MainTitle";

// const ShareThoughts = () => {
//   const [value, setValue] = React.useState(1);
//   return (
//     <section>
//       <MainTitle text={`Share your valuable thoughts`} />
//       <div className="p-2 md:p-4 backdrop-blur-2xl bg-black border border-white/[0.2] rounded-md">
//         <h4 className="text-center font-primary text-white mt-4 text-3xl md:text-4xl lg:text-5xl">
//           Share your feedback
//         </h4>
//         <p className="font-secondary text-white/60 text-center mt-3">
//           Share your experience with our pharmacy services and help us serve you
//           better
//         </p>
//         <div>
//           <p className="font-secondary text-lg text-white mt-4">
//             How would you rate your experience?
//           </p>
//           {/* here i want to add rating  */}
//           <Box sx={{ "& > legend": { mt: 2 } }}>
//             <Rating
//               name="simple-controlled"
//               value={value}
//               onChange={(event, newValue) => {
//                 setValue(newValue);
//               }}
//             />
//           </Box>
//         </div>
//         <form>
//           <textarea
//             className="w-full border mt-3 border-gray-700 rounded-md"
//             rows={`5`}
//           ></textarea>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ShareThoughts;






import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import MainTitle from "../../../shared/MainTitle";
import StarIcon from "@mui/icons-material/Star";

const ShareThoughts = () => {
  const [value, setValue] = React.useState(1);
  return (
    <section>
      <MainTitle text={`Share your valuable thoughts`} />
      <div className="p-2 md:p-4 backdrop-blur-2xl bg-black border border-white/[0.2] rounded-md">
        <h4 className="text-center font-primary text-white mt-4 text-3xl md:text-4xl lg:text-5xl">
          Share your feedback
        </h4>
        <p className="font-secondary text-white/60 text-center mt-3">
          Share your experience with our pharmacy services and help us serve you
          better
        </p>
        <div>
          <p className="font-secondary text-lg text-white mt-4">
            How would you rate your experience?
          </p>
          {/* Rating */}
          <div className="flex items-center gap-5">
            <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              name="customized-empty"
              value={value}
              onChange={(event, newValue) => setValue(newValue)}
              precision={1}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={
                <StarIcon fontSize="inherit" sx={{ color: "rgba(255,255,255,0.3)" }} />
              }
              sx={{
                color: "#FFD700",
                fontSize: 32,     
              }}
            />
          </Box>
          <span className="text-white font-primary text-lg">( {value} stars )</span>
          </div>
        </div>
        <form>
          <textarea
            className="w-full border mt-3 border-white/[0.2] rounded-md bg-black text-white p-2"
            rows={5}
            placeholder="Write your feedback..."
          ></textarea>
        </form>
      </div>
    </section>
  );
};

export default ShareThoughts;
