import React from "react";
import { useState } from "react";
import Logo from "../assets/portfolio-logo.png";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { animate, motion } from "framer-motion";
// import { a } from "react-router-dom";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (!IsOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="bg-black flex flex-row justify-between md:justify-around h-[100px] w-full border border-white absolute z-50">
        <motion.div
          className="flex flex-row items-center"
          whileHover={{ rotateY: 360, scale: 1.5 }}
        >
          <a href="/">
            <img className="h-[50px] w-[50px]" src={Logo} alt="logo" />
          </a>
          <a href="/">
            <h1 className="text-white font-poppins font-extrabold">
              PORTFOLIO
            </h1>
          </a>
        </motion.div>

        <ul className="md:flex md:items-center md:gap-20 hidden">
          <a href="/">
            <motion.li
              className="text-white font-poppins font-semibold"
              whileHover={{ scale: 1.5 }}
            >
              Home
            </motion.li>
          </a>
          <a href="#about">
            <motion.li
              className="text-white font-poppins font-semibold"
              whileHover={{ scale: 1.5 }}
            >
              About
            </motion.li>
          </a>
          <a href="/">
            <motion.li
              className="text-white font-poppins font-semibold"
              whileHover={{ scale: 1.5 }}
            >
              Work
            </motion.li>
          </a>
          <a href="/">
            <motion.li
              className="text-white font-poppins font-semibold"
              whileHover={{ scale: 1.5 }}
            >
              Tools
            </motion.li>
          </a>
          <a href="#contact">
            <motion.li
              className="text-white font-poppins font-semibold"
              whileHover={{ scale: 1.5 }}
            >
              Contact
            </motion.li>
          </a>
        </ul>

        {IsOpen ? (
          <div className="flex items-center justify-center w-[45px]">
            <HiOutlineX
              className="h-[45px] w-[45px] text-white cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-[45px] md:hidden">
            <HiMenu
              className="h-[45px] w-[45px] text-white cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          </div>
        )}

        {IsOpen ? (
          <motion.ul
            className={`my-2 absolute w-full top-[100px] h-[500px] flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-600 md:hidden ${
              IsOpen ? "" : ""
            }`}
          >
            <a href="#" className="py-2">
              <li className="text-white font-poppins font-semibold">Home</li>
            </a>
            <a href="#about" className="py-2">
              <li className="text-white font-poppins font-semibold">About</li>
            </a>
            <a href="#" className="py-2">
              <li className="text-white font-poppins font-semibold">Work</li>
            </a>
            <a href="#" className="py-2">
              <li className="text-white font-poppins font-semibold">Tools</li>
            </a>
            <a href="#contact" className="py-2">
              <li className="text-white font-poppins font-semibold">Contact</li>
            </a>
          </motion.ul>
        ) : (
          <div className="hidden" />
        )}
      </nav>
    </>
  );
};

export default Navbar;
