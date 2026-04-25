import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import BuildIcon from '@mui/icons-material/Build';

const Skills = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Redux Toolkit",
    "Redux",
    "MERN Stack",
    "Node.js",
    "Redis",
    "RabbitMQ",
    "MongoDB",
    "State Management",
    "API Integration",
    "Version Control",
    "GitHub",
  ];

  return (
    <>
      <section
        className={`min-h-screen flex justify-center items-center pt-20 pb-10 px-6 md:px-10 ${darkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col items-center p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-4xl w-full text-center relative overflow-hidden backdrop-blur-md ${
            darkMode 
              ? "bg-[#1e293b]/80 text-white shadow-cyan-900/40 border border-slate-700/50" 
              : "bg-white/80 text-gray-800 shadow-blue-900/10 border border-gray-200"
          }`}
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className={`p-3 rounded-full mb-4 ${darkMode ? "bg-slate-800" : "bg-blue-50"}`}
          >
            <BuildIcon sx={{ fontSize: 28 }} className={darkMode ? "text-cyan-400" : "text-blue-600"} />
          </motion.div>

          <div
            className="text-[16px] mb-[4px] font-bold text-center text-light-primary dark:text-cyan-400"
          >
            PROFICIENCY
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
            Expertise and <span className={darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"}>Tools</span>
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-3 max-w-[800px] relative z-10 w-full overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
            {skills?.map((el, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.05 }}
                  key={index}
                  className={`px-[16px] py-[8px] md:px-[24px] md:py-[12px] text-sm md:text-base rounded-full font-medium shadow-md transition-all duration-300 cursor-default ${
                    darkMode 
                      ? "bg-slate-800/80 border border-slate-700 text-cyan-50 hover:bg-slate-700 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]" 
                      : "bg-white border border-blue-100 text-gray-800 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                  }`}
                >
                  {el}
                </motion.div>
              );
            })}
          </div>

          <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
