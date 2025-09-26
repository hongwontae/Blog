import { useState } from "react";
import { motion } from "framer-motion";
import SnowImage from "../assets/LeftIntroduce-Image/Snow Image.png";
import EditSnowImage from "../assets/LeftIntroduce-Image/Edit Snow Image.png";

function LeftIntroduce() {
  const [hovered, setHovered] = useState(false);

  return (
    <figure
      className="w-[28rem] relative h-[30rem]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.img
        src={SnowImage}
        className="absolute top-0 left-0 h-[20rem] w-[16rem] rounded-2xl object-cover"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      />

      <motion.img
        src={EditSnowImage}
        className="absolute top-0 left-0 h-[20rem] w-[16rem] rounded-2xl object-cover"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </figure>
  );
}

export default LeftIntroduce;