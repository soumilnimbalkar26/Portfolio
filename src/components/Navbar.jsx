import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../redux/feature/darkMode/darkModeSlice";
import Switch from "../reusable/switch/Switch";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = ({}) => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);

  const toggleDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navTags = [
    {
      name: "HOME",
      url: "#home",
    },
    {
      name: "WORK",
      url: "#work",
    },
    {
      name: "SKILLS",
      url: "#skills",
    },
    {
      name: "PROJECTS",
      url: "#projects",
    },
    {
      name: "CONTACT",
      url: "#contact",
    },
  ];
  return (
    <>
      <nav
        className={`flex justify-between h-[80px] w-full fixed top-0 z-10 px-[80px] transition-all ease-in-out duration-300 ${
          scrolled ? "shadow-lg" : ""
        } ${darkMode ? 'bg-dark-background/90 text-dark-text' : 'bg-light-background/90 text-light-text'} backdrop-blur-sm`}
      >
        <motion.div className="flex flex-row items-center">
          <motion.a whileHover={{ scale: 1.2 }} href="#home">
            <h1
              className={`${darkMode ? "text-dark-text" : "text-light-text"} font-bold text-[18px]`}
            >
              SOUMIL NIMBALKAR
            </h1>
          </motion.a>
        </motion.div>

        <ul className="md:flex md:items-center md:gap-20 hidden">
          {navTags?.map((el, index) => (
            <div key={index}>
              <a href={el?.url} key={el?.name}>
                <motion.li
                  className={`${darkMode ? "text-dark-text" : "text-light-text"} text-[12px] font-bold`}
                  whileHover={{ scale: 1.2 }}
                >
                  {el?.name}
                </motion.li>
              </a>
            </div>
          ))}
          <Switch
            toggleSwitch={toggleDarkMode}
            leftMisc={darkMode ? "Dark Mode" : "Light Mode"}
            rightMisc={darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
