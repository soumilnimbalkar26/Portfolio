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
      name: "RESUME",
      url: "#resume",
    },
    {
      name: "CONTACT",
      url: "#contact",
    },
  ];
  return (
    <>
      <nav
        className={`flex justify-between items-center h-[70px] w-full max-w-7xl mx-auto fixed top-4 left-0 right-0 z-50 px-8 transition-all ease-in-out duration-300 rounded-full backdrop-blur-md border ${
          scrolled 
            ? darkMode 
              ? "bg-[#1e293b]/90 shadow-cyan-900/20 border-slate-700/50 shadow-lg" 
              : "bg-white/90 shadow-blue-900/10 border-gray-200 shadow-lg"
            : darkMode
              ? "bg-[#1e293b]/50 border-transparent"
              : "bg-white/50 border-transparent"
        }`}
      >
        <motion.div className="flex flex-row items-center">
          <motion.a whileHover={{ scale: 1.05 }} href="#home">
            <h1
              className={`${darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"} font-extrabold text-[20px] tracking-tight`}
            >
              SOUMIL NIMBALKAR
            </h1>
          </motion.a>
        </motion.div>

        <ul className="md:flex md:items-center md:gap-8 hidden">
          {navTags?.map((el, index) => (
            <div key={index}>
              <a href={el?.url} key={el?.name}>
                <motion.li
                  className={`${darkMode ? "text-slate-300 hover:text-cyan-400" : "text-gray-600 hover:text-blue-600"} text-[13px] font-bold tracking-wide transition-colors`}
                  whileHover={{ y: -2 }}
                >
                  {el?.name}
                </motion.li>
              </a>
            </div>
          ))}
          <div className="ml-4 pl-4 border-l border-gray-300 dark:border-slate-700">
            <Switch
              toggleSwitch={toggleDarkMode}
              leftMisc={null}
              rightMisc={darkMode ? <DarkModeIcon className="text-cyan-400 text-sm" /> : <LightModeIcon className="text-blue-600 text-sm" />}
            />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
