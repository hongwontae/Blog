import HWTIcon from "../assets/HWT Light Icon.png";
import BlogIcon from "../assets/Blog Icon.png";
import ResumeIcon from "../assets/Resume Icon.png";
import ExhibitionIcon from "../assets/Exhibition Icon.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <>
      <header className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-4">
          <div className="w-10 h-10">
            <img
              src={HWTIcon}
              alt="hwtIcon"
              className="w-full h-full object-cover"
            ></img>
          </div>
          <motion.div
            className="text-white font-semibold"
            whileHover={{ color: "#EF476F" }}
          >
            Frontend & Design
          </motion.div>
        </div>
        <div className="text-white flex flex-row gap-10">
          <motion.div
            className="flex flex-row gap-2"
            whileHover={{ color: "#EF476F" }}
          >
            <img src={BlogIcon} alt="Blog-Icon" className="w-6 h-6"></img>
            <div>Detail Blog</div>
          </motion.div>
          <motion.div
            className="flex flex-row gap-2"
            whileHover={{ color: "#EF476F" }}
          >
            <img src={ResumeIcon} alt="Resume-Icon" className="w-6 h-6"></img>
            <div>Resume</div>
          </motion.div>

          <motion.div
            className="flex flex-row gap-2"
            whileHover={{ color: "#EF476F" }}
          >
            <img
              src={ExhibitionIcon}
              alt="Exhibition-Icon"
              className="w-6 h-6"
            ></img>
            <div>Exhibition Hall</div>
          </motion.div>
        </div>
      </header>
    </>
  );
}

export default Header;
