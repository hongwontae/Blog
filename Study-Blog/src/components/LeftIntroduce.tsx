import { motion } from "framer-motion";
import SnowImage from "../assets/LeftIntroduce-Image/Snow Image.png";
import EditSnowImage from "../assets/LeftIntroduce-Image/Edit Snow Image.png";
import Poster from '../assets/LeftIntroduce-Image/포스터.png';

function LeftIntroduce() {


  return (
    <>
      <div className="relative w-[20rem] h-[19rem] overflow-hidden rounded-xl">
      {/* 기본 이미지 */}
      <motion.img
        src={Poster}
        alt="default"
        className="absolute w-full h-full object-cover"
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* hover 이미지 */}
      <motion.img
        src={SnowImage}
        alt="hover"
        className="absolute w-full h-full object-cover"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
    </div>
    </>
  )
}

export default LeftIntroduce;