import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <>
      <section
        className={`min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-6 md:px-10 ${darkMode ? "bg-dark-background text-dark-text" : "bg-light-background text-light-text"}`}
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-5 flex flex-col items-center p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-4xl w-full text-center relative overflow-hidden backdrop-blur-md ${
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
            <MailOutlineIcon sx={{ fontSize: 28 }} className={darkMode ? "text-cyan-400" : "text-blue-600"} />
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-10 tracking-tight">
            GET IN <span className={darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"}>TOUCH</span>
          </h1>

          <div className="w-full max-w-xl relative z-10 overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
            <ContactForm darkMode={darkMode} />
          </div>

          <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
