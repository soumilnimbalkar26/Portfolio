import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';

const Resume = () => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <div
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-6 md:px-10"
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
          className={`p-3 rounded-full mb-6 ${darkMode ? "bg-slate-800" : "bg-blue-50"}`}
        >
          <PictureAsPdfIcon sx={{ fontSize: 36 }} className={darkMode ? "text-cyan-400" : "text-blue-600"} />
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          My <span className={darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"}>Resume</span>
        </h1>
        
        <p className={`text-base md:text-xl mb-8 max-w-2xl leading-relaxed ${darkMode ? "text-slate-300" : "text-gray-600"}`}>
          Learn more about my professional journey, technical expertise, and the value I can bring to your team. Dive deep into my academic and work history.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1mB6Pf6spWupU4UECHvlXqEOvBp5Phqbb/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
              darkMode
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            }`}
          >
            <DownloadIcon />
            View / Download
          </motion.a>
        </div>

        {/* Decorative background blurs inside the card */}
        <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default Resume;
