import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Icons = ({ icon, url = "" }) => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <>
      <Link to={url} target="_blank">
        <motion.div
          className={`h-[50px] w-[50px] border-[2px] flex items-center justify-center rounded-full transition-colors duration-300 ${
            darkMode ? 'border-dark-text text-dark-text' : 'border-light-text text-light-text'
          }`}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          {icon}
        </motion.div>
      </Link>
    </>
  );
};

export default Icons;
