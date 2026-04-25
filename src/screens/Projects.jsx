import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import CodeIcon from '@mui/icons-material/Code';
import todo from "../assets/todo.png";
import imageSearch from "../assets/image-search.png";
import passwordGen from "../assets/password-gen.png";

const Projects = () => {
  const { darkMode } = useSelector((state) => state.darkMode);

  const projects = [
    {
      title: "TODO App",
      date: "2024",
      description: "A feature-rich TODO application with state persistence.",
      link:"https://potatotodos.vercel.app/todo",
      image:todo
    },
    {
      title: "Image Search App",
      date: "2024",
      description: "A dynamic image search engine powered by Unsplash API.",
      link:"https://image-search-app-chi.vercel.app/",
      image:imageSearch
    },
    {
      title: "Password Generator",
      date: "2025",
      description: "Secure and customizable password generation tool.",
      link:"https://password-generator-lake-sigma.vercel.app/",
      image:passwordGen
    },
  ];

  return (
    <>
      <section
        className={`flex items-center justify-center min-h-screen pt-20 pb-10 px-6 md:px-10 transition-colors duration-300 ${darkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-6xl w-full relative overflow-hidden backdrop-blur-md ${
            darkMode 
              ? "bg-[#1e293b]/80 text-white shadow-cyan-900/40 border border-slate-700/50" 
              : "bg-white/80 text-gray-800 shadow-blue-900/10 border border-gray-200"
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className={`p-3 rounded-full mb-4 ${darkMode ? "bg-slate-800" : "bg-blue-50"}`}
            >
              <CodeIcon sx={{ fontSize: 28 }} className={darkMode ? "text-cyan-400" : "text-blue-600"} />
            </motion.div>

            <div
              className="text-[16px] mb-[4px] font-bold text-center text-light-primary dark:text-cyan-400"
            >
              PROJECTS
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
              THE <span className={darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"}>WORK</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full mt-2 overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
            {projects?.map((project, index) => {
              return (
                <motion.a 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  href={project?.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className={`overflow-hidden rounded-[16px] mb-3 shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl ${
                    darkMode ? "bg-slate-800/60 border border-slate-700" : "bg-white border border-gray-100"
                  }`}>
                    <img className="h-[180px] md:h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110" src={project?.image} alt={project?.title} />
                  </div>
                  <div className="text-[18px] md:text-[20px] font-bold mb-1 group-hover:text-cyan-500 transition-colors duration-300">{project?.title}</div>
                  <div className={`text-justify mb-2 text-sm md:text-[15px] ${darkMode ? "text-slate-300" : "text-gray-600"}`}>{project?.description}</div>
                  <div className={`text-[12px] md:text-[13px] font-medium ${darkMode ? "text-slate-400" : "text-gray-400"}`}>{project?.date}</div>
                </motion.a>
              );
            })}
          </div>

          <div className="absolute top-[-50px] left-[-30px] w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[-50px] right-[-30px] w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
