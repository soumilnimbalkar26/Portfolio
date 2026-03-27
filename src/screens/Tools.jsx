import React from 'react'
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';

const Tools = () => {
      const { darkMode } = useSelector((state) => state.darkMode);

  return (
     <>
      <section
        id="work"
        className={`${darkMode ? 'bg-dark-background' : 'bg-light-background'} min-h-screen flex flex-col justify-center items-center`}
      >
        <div className="flex justify-center items-center mb-6">
          <motion.h1
            className="py-4 mx-2 text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-900  font-normal cursor-default text-[50px] sm:text-[60px] md:text-[80px]"
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
            Tools
          </motion.h1>
        </div>
      </section>
    </>
  )
}

export default Tools