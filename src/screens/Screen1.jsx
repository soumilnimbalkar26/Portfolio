import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Icons from "../reusable/icons/Icons";

const Screen1 = ({}) => {
  return (
    <section
      id="screen1"
      // className="min-h-screen flex flex-col justify-center items-center"
      className={
        "bg-black min-h-screen flex flex-col justify-center items-center"
      }
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
        <Icons
          icon={<FaLinkedin className="text-white text-[20px]" />}
          url="https://www.linkedin.com/in/soumilnimbalkar"
        />
        <Icons
          icon={<FaGithub className="text-white text-[20px]" />}
          url="https://github.com/soumilnimbalkar26"
        />
        <Icons
          icon={<FaTwitter className="text-white text-[20px]" />}
          url="https://twitter.com/Soumil23606288"
        />
        <Icons
          icon={<FaInstagram className="text-white text-[20px]" />}
          url="https://www.instagram.com/soumilnimbalkar/"
        />
      </motion.div>
    </section>
  );
};

export default Screen1;
