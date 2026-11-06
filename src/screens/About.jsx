import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const About = () => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <>
      <section
        id="about"
        className={`${darkMode ? "bg-dark-background text-dark-text" : "bg-light-background text-light-text"} min-h-screen flex flex-col justify-center items-center px-4 transition-colors duration-300`}
      >
        <div className="flex justify-center items-center mb-6">
          <motion.h1
            className={`py-4 mx-2 font-bold cursor-default text-[50px] sm:text-[60px] md:text-[80px] ${darkMode ? 'text-dark-text' : 'text-light-text'}`}
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
        <div className={`py-4 mx-2 font-normal cursor-default text-[16px] sm:text-[20px] md:text-[24px] max-w-[1000px] text-justify opacity-80 ${darkMode ? 'text-dark-text' : 'text-light-text'}`}>
          Frontend Developer with 2+ years of experience crafting fast,
          responsive interfaces in React.js and Next.js. Skilled in Redux state
          management, reusable component design, dashboards, and dynamic data
          tables. Comfortable debugging, optimizing performance, and working
          closely with backend teams. Experienced in React Native through a
          freelance mobile app project, with a foundation in Node.js.
        </div>
      </section>
    </>
  );
};

export default About;
