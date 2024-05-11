import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Screen1 = () => {
  return (
    <section
      id="screen1"
      className=" min-h-screen flex flex-col justify-center items-center"
    >
      <div>
        <motion.h1
          className=" my-4 text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-900 font-poppins font-normal text-[28px] cursor-default sm:text-[60px] md:text-[80px] lg:text-[96px] leading-[30px] sm:leading-[100px] md:leading-[144px]"
          initial={{ opacity: 0, x: "20vw" }} // initial position outside the viewport
          whileInView={{
            opacity: 1,
            x: "0vw",
            transition: {
              duration: 2,
              type: "spring",
            },
          }}
          viewport={{ once: true }}
        >
          FRONTEND DEVELOPER
        </motion.h1>
        <motion.h1
          className=" my-4 text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-900 font-poppins font-normal text-[28px] cursor-default sm:text-[60px] md:text-[80px] lg:text-[96px] leading-[30px] sm:leading-[100px] md:leading-[144px]"
          initial={{ opacity: 0, x: "-20vw" }} // initial position outside the viewport
          whileInView={{
            opacity: 1,
            x: "0vw",
            transition: {
              duration: 2,
              type: "spring",
            },
          }}
          viewport={{ once: true }}
        >
          SOUMIL NIMBALKAR
        </motion.h1>
      </div>

      <motion.div
        className="flex mt-2 flex-row justify-center items-center gap-[20px] md:gap-[40px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
            type: "spring",
          },
        }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </section>
  );
};

export default Screen1;
