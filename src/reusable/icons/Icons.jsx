import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Icons = ({ icon, url = "" }) => {
  return (
    <>
      <Link to={url} target="_blank">
        <motion.div
          className="h-[50px] w-[50px] border-white border-[2px] flex items-center justify-center rounded-full"
          whileHover={{ scale: 1.8, rotate: 10 }}
          whileTap={{ scale: 1.5 }}
        >
          {icon}
        </motion.div>
      </Link>
    </>
  );
};

export default Icons;
