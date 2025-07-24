import React from "react";
import { useState } from "react";
import Logo from "../assets/portfolio-logo.png";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { animate, motion } from "framer-motion";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import Switch from "../reusable/switch/Switch";
// import { useDispatch } from "react-redux";
// import { a } from "react-router-dom";

const Navbar = ({}) => {
  const navTags = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Work",
      url: "/work",
    },
    {
      name: "Tools",
      url: "/tools",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <>
      <div className="relative">
        <nav className="bg-black flex flex-row justify-around h-[100px] w-full fixed z-10">
          <motion.div className="flex flex-row items-center">
            <motion.a whileHover={{ rotateY: 360, scale: 1.5 }} href="/">
              <h1 className={`${"text-white"}  font-poppins font-extrabold`}>
                {/* <h1 className="text-white font-poppins font-extrabold"> */}
                PORTFOLIO
              </h1>
            </motion.a>
          </motion.div>

          <ul className="md:flex md:items-center md:gap-20 hidden">
            {navTags?.map((el, index) => (
              <div key={index}>
                <a href={el?.url} key={el?.name}>
                  <motion.li
                    className="text-white font-poppins font-semibold"
                    whileHover={{ scale: 1.5 }}
                  >
                    {el?.name}
                  </motion.li>
                </a>
              </div>
            ))}

            <Switch leftMisc={"Dark Mode"} rightMisc={<DarkModeIcon />} />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
