import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const Work = () => {
  const { darkMode } = useSelector((state) => state.darkMode);

  const exp = [
    {
      startDate: "DEC 2023",
      endDate: "PRESENT",
      title: "Frontend Developer",
      company: "Lineup Technologies Pvt. Ltd.",
      description: `Frontend Developer with experience in React.js and Next.js, building scalable, user-focused web applications. Developed reusable dashboards, dynamic tables, and custom components aligned with business needs. Integrated REST APIs and managed state using Redux. Improved performance and code quality through refactoring and debugging UI, API, and state issues. Collaborated with backend teams on data flow and API contracts. Also contributed to React Native mobile apps and worked in Agile environments using Git-based workflows.`,
    },
  ];

  return (
    <>
      <section
        className={`min-h-screen flex justify-center items-center pt-20 pb-10 px-6 md:px-10 transition-colors duration-300 ${darkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col py-8 px-6 md:p-12 rounded-[2.5rem] shadow-2xl max-w-5xl w-full relative overflow-hidden backdrop-blur-md ${
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
              <WorkOutlineIcon sx={{ fontSize: 28 }} className={darkMode ? "text-cyan-400" : "text-blue-600"} />
            </motion.div>

            <div
              className="text-[16px] mb-[4px] font-bold text-center text-light-primary dark:text-cyan-400"
            >
              JOURNEY
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 tracking-tight">
              Work <span className={darkMode ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"}>Experience</span>
            </h1>
          </div>

          <div className="space-y-6 md:space-y-12 relative z-10 w-full overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
            {exp?.map((item, index) => {
              return (
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  key={index} 
                  className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-[40px] p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                    darkMode ? "bg-slate-800/50 hover:bg-slate-800" : "bg-white/50 hover:bg-white shadow-sm"
                  }`}
                >
                  <div className="text-[14px] md:text-[16px] text-nowrap font-bold text-cyan-600 dark:text-cyan-400 md:min-w-[180px]">
                    {item?.startDate} - {item?.endDate}
                  </div>
                  <div>
                    <div
                      className="text-[20px] md:text-[24px] font-bold mb-[12px] tracking-tight"
                    >
                      {item?.title} <span className="text-light-primary dark:text-cyan-400 opacity-60 mx-1">•</span> <span className={darkMode ? "text-slate-300" : "text-gray-600 inline-block"}>{item?.company}</span>
                    </div>
                    <div className={`text-justify leading-relaxed text-sm md:text-base ${darkMode ? "text-slate-400" : "text-gray-600"}`}>{item?.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="absolute top-[-50px] right-[-30px] w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[-50px] left-[-30px] w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
        </motion.div>
      </section>
    </>
  );
};

export default Work;
