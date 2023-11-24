import React from "react";
import { useState } from "react";
import Logo from "../assets/portfolio-logo.png";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <nav className="absolute z-50 flex w-full h-[100px] justify-around">
      <motion.div
        className="flex flex-row justify-between items-center"
        whileHover={{ rotateY: 360, scale: 1.5 }}
      >
        <Link to="/">
          <img className="h-[50px] w-[50px]" src={Logo} alt="logo" />
        </Link>
        <Link to="/">
          <h1 className="text-white font-poppins font-extrabold">PORTFOLIO</h1>
        </Link>
      </motion.div>

      {IsOpen ? (
        <div className="flex items-center justify-center w-[45px]">
          <HiOutlineX
            className="h-[45px] w-[45px] text-white cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center w-[45px]">
          <HiMenu
            className="h-[45px] w-[45px] text-white cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
        </div>
      )}

      <ul className="md:flex md:items-center md:gap-20 hidden">
        <Link to="#">
          <motion.li
            className="text-white font-poppins font-semibold"
            whileHover={{ scale: 1.5 }}
          >
            Home
          </motion.li>
        </Link>
        <Link to="#">
          <motion.li
            className="text-white font-poppins font-semibold"
            whileHover={{ scale: 1.5 }}
          >
            About
          </motion.li>
        </Link>
        <Link to="#">
          <motion.li
            className="text-white font-poppins font-semibold"
            whileHover={{ scale: 1.5 }}
          >
            Work
          </motion.li>
        </Link>
        <Link to="#">
          <motion.li
            className="text-white font-poppins font-semibold"
            whileHover={{ scale: 1.5 }}
          >
            Tools
          </motion.li>
        </Link>
        <Link to="#">
          <motion.li
            className="text-white font-poppins font-semibold"
            whileHover={{ scale: 1.5 }}
          >
            Contact
          </motion.li>
        </Link>
      </ul>

      {IsOpen ? (
        <ul
          className={`my-2 absolute top-[100px] w-full h-[300px] flex flex-col justify-around items-center bg-gradient-to-tr from-gray-900 to-gray-600 md:hidden ${
            IsOpen
              ? "animate-fade-down animate-duration-[200ms]"
              : "animate-fade-up opacity-0 animate-duration-[200ms]"
          }`}
        >
          <Link to="#" className="py-2">
            <li className="text-white font-poppins font-semibold">Home</li>
          </Link>
          <Link to="#" className="py-2">
            <li className="text-white font-poppins font-semibold">About</li>
          </Link>
          <Link to="#" className="py-2">
            <li className="text-white font-poppins font-semibold">Work</li>
          </Link>
          <Link to="#" className="py-2">
            <li className="text-white font-poppins font-semibold">Tools</li>
          </Link>
          <Link to="#" className="py-2">
            <li className="text-white font-poppins font-semibold">Contact</li>
          </Link>
        </ul>
      ) : (
        <div className="hidden" />
      )}
    </nav>
  );
};

export default Navbar;
