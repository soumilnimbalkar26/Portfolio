import portrait from "../assets/portrait.png";
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Screen1 = ({}) => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <section
      className={`flex items-center justify-center min-h-screen pt-20 pb-10 px-6 md:px-10 ${darkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col md:flex-row items-center p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-6xl w-full relative overflow-hidden backdrop-blur-md gap-8 md:gap-12 ${
          darkMode 
            ? "bg-[#1e293b]/80 text-white shadow-cyan-900/40 border border-slate-700/50" 
            : "bg-white/80 text-gray-800 shadow-blue-900/10 border border-gray-200"
        }`}
      >
        <div className="flex-1 relative z-10">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className={`inline-block p-3 rounded-full mb-4 ${darkMode ? "bg-slate-800" : "bg-blue-50"}`}
          >
            <PersonOutlineIcon sx={{ fontSize: 28 }} className={darkMode ? "text-cyan-400" : "text-blue-600"} />
          </motion.div>

          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[48px] md:text-[64px] leading-[1.1] font-extrabold tracking-tight"
            >
              Software
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-[48px] md:text-[64px] leading-[1.1] font-extrabold pb-2 ${darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"}`}
            >
              Developer.
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`text-justify md:text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-gray-600"}`}
          >
            I’m a software developer specializing in React.js and Next.js,
            building responsive, scalable, and high-performance user
            interfaces. I focus on creating maintainable architectures,
            dynamic dashboards, and reusable components, with strong state
            management using Redux and effective frontend–backend
            collaboration.
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-1 flex justify-center relative z-10 w-full"
        >
          <div className="relative">
            <img
              src={portrait}
              alt="Portrait"
              className={`h-[300px] w-[300px] md:h-[400px] md:w-[400px] object-cover rounded-full shadow-2xl border-4 ${darkMode ? "border-slate-700" : "border-white"}`}
            />

            {/* Absolute Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.7 }}
              className={`absolute rounded-2xl p-4 bottom-[10px] left-[-20px] md:left-[-40px] shadow-xl backdrop-blur-md border ${
                darkMode ? 'bg-slate-800/90 border-slate-700 text-white' : 'bg-white/90 border-gray-100 text-gray-800'
              }`}
            >
              <div className={`text-3xl font-extrabold ${darkMode ? "text-cyan-400" : "text-blue-600"}`}>
                2+
              </div>
              <div className="font-bold text-xs tracking-widest opacity-80">
                YEARS OF EXPERIENCE
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative background blurs */}
        <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default Screen1;
