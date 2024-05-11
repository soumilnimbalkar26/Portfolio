import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center my-5"
      >
        <div className="flex justify-center items-center mb-6">
          <motion.h1
            className="py-4 mx-2 text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-900 font-poppins font-normal cursor-default text-[50px] sm:text-[60px] md:text-[80px]"
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
            ABOUT ME
          </motion.h1>
        </div>

        <div className="mx-1 my-4 flex flex-col gap-4 sm:flex-row sm:justify-around ">
          <motion.div
            className=" bg-gray-950 rounded-[10px] flex flex-col justify-center items-center w-full sm:w-[500px] md:w-[650px] lg:w-[700px] gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 2,
                type: "spring",
              },
            }}
            viewport={{ once: true }}
          >
            <p className="py-4 px-4 font-poppins font-bold text-[20px] leading-[35px] text-slate-300">
              <span className="text-[32px]">D</span>edicated and detail-oriented
              Front-End Web Developer with a passion for creating visually
              appealing and intuitive user interfaces.
            </p>
            <p className="py-4 px-4 font-poppins font-bold text-[20px] leading-[35px] text-slate-300">
              <span className="text-[32px]">L</span>everaging a robust skill set
              that includes expertise in HTML, CSS, JavaScript, and React, I am
              user-friendly websites.
            </p>
            <p className="py-4 px-4 font-poppins font-bold text-[20px] leading-[35px] text-slate-300">
              <span className="text-[32px]">D</span>edicated to staying updated
              with the latest web technologies and trends.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-950 rounded-[10px] flex flex-col items-center w-full sm:w-[500px] md:w-[650px] lg:w-[700px] gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 2,
                type: "spring",
              },
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-900 font-poppins font-normal cursor-default text-[40px]">
              SKILLS
            </h2>
            <p className="py-4 px-4 font-poppins font-bold text-[20px] leading-[35px] text-slate-300">
              <span className="text-[32px]">L</span>everaging a robust skill set
              that includes expertise in HTML, CSS, JavaScript, and React.
            </p>
            <p className="py-4 px-4 font-poppins font-bold text-[20px] leading-[35px] text-slate-300">
              <span className="text-[32px]">D</span>edicated to staying updated
              with the latest web technologies and trends.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-row w-full justify-center gap-[10px] md:gap-[30px] py-10"
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
    </>
  );
};

export default About;
