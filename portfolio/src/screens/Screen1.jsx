import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Screen1 = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-900 font-poppins font-normal text-[30px] cursor-default sm:text-[60px] md:text-[80px] lg:text-[96px] py-4 leading-[30px] sm:leading-[100px] md:leading-[144px]"
          initial={{ opacity: 0, x: "20vw" }} // initial position outside the viewport
          animate={{
            opacity: 1,
            x: "0vw",
            transition: {
              duration: 5,
              type: "spring",
            },
          }}
        >
          WEB DEVELOPER
        </motion.h1>
        <motion.h1
          className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-900 font-poppins font-normal text-[30px] cursor-default sm:text-[60px] md:text-[80px] lg:text-[96px] py-4 leading-[30px] sm:leading-[100px] md:leading-[144px]"
          initial={{ opacity: 0, x: "-20vw" }} // initial position outside the viewport
          animate={{
            opacity: 1,
            x: "0vw",
            transition: {
              duration: 5,
              type: "spring",
            },
          }}
        >
          SOUMIL NIMBALKAR
        </motion.h1>
      </div>

      <div className="flex flex-row w-[500px] justify-center mt-5 animate-fade-up animate-duration-[1000ms] gap-[10px] md:gap-[30px]">
        <Link
          to="https://www.linkedin.com/in/soumil-nimbalkar-348a64192/"
          target="_blank"
        >
          <motion.div
            className="h-[50px] w-[50px] border-white border-[2px] flex items-center justify-center rounded-full"
            whileHover={{ scale: 2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="text-white h-[25px] w-[25px]" />
          </motion.div>
        </Link>
        <Link to="https://github.com/soumilnimbalkar26" target="_blank">
          <motion.div
            className="h-[50px] w-[50px] border-white border-[2px] flex items-center justify-center rounded-full"
            whileHover={{ scale: 2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="text-white h-[25px] w-[25px]" />
          </motion.div>
        </Link>
        <Link to="https://twitter.com/Soumil23606288" target="_blank">
          <motion.div
            className="h-[50px] w-[50px] border-white border-[2px] flex items-center justify-center rounded-full"
            whileHover={{ scale: 2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter className="text-white h-[25px] w-[25px]" />
          </motion.div>
        </Link>
        <Link to="https://www.instagram.com/soumilnimbalkar/" target="_blank">
          <motion.div
            className="h-[50px] w-[50px] border-white border-[2px] flex items-center justify-center rounded-full"
            whileHover={{ scale: 2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram className="text-white h-[25px] w-[25px]" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Screen1;
