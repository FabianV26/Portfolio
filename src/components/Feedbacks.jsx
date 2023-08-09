import React, { useRef } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";

import { useFollowPointer } from "../hoc";

import { AiOutlineDownload  } from "react-icons/ai";



const Feedbacks = () => {
    const containerRef = useRef(null);
  const { x, y } = useFollowPointer(containerRef);
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div 
        background = "#1d1836"
        color= "#fff"
        ref={containerRef}
        className="`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`-"
        style={{ width: "80vw", height: "80vh" }}
      >
        <motion.div
          className="box"
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 3,
            stiffness: 50,
            restDelta: 0.001
      }}
      >
        <button  >
            <AiOutlineDownload  size={145} />
          </button>
        </motion.div>
      
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");