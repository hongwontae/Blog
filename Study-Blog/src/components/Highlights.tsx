import PhotoshopCover from "../assets/Highlights-Image/Photoshop Cover.png";
import ReactBlogCover from "../assets/Highlights-Image/Final React Cover.png";
import { motion } from "framer-motion";

function Highlights() {
  return (
    <>
      <div className="w-full text-center text-white">
        <h1 className="text-highlight font-semibold text-3xl mb-4">
          Highlights
        </h1>
        <div className="flex flex-row gap-8">
          <motion.section
            className="w-full h-[15rem] rounded-2xl border-2"
            whileHover={{ borderWidth: 2, borderColor: "#ffffff" }}
          >
            <img
              src={ReactBlogCover}
              className="rounded-t-2xl h-[10.5rem] w-full object-cover"
              alt="React"
            ></img>
            <div className="flex flex-col mr-2 ml-2">
              <div className="flex flex-col items-start">
                <p className="text-[0.85rem]">React</p>
                <p className="text-highlight font-bold">UseState 소스 코드 심층 분석</p>
              </div>

              <p className="self-end">2025-09-20</p>
            </div>
          </motion.section>
          <motion.section
            className="w-full h-[15rem] rounded-2xl"
            whileHover={{ borderWidth: 2, borderColor: "#ffffff" }}
          >
            <img
              src={PhotoshopCover}
              className="rounded-t-2xl h-[10.5rem] w-full object-cover"
              alt="Photoshop"
            ></img>
            <div className="flex flex-col mr-2 ml-2">
              <div className="flex flex-col items-start">
                <p className="text-[0.85rem]">Photoshop</p>
                <p className="text-highlight font-bold">
                  Photoshop에서 Layer를 어떻게 사용할까?
                </p>
              </div>

              <p className="self-end">2025-09-23</p>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}

export default Highlights;
