import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <>
      <section
        className={`min-h-screen flex flex-col justify-center items-center ${darkMode ? "bg-dark-background text-dark-text" : "bg-light-background text-light-text"}`}
      >
        <div className="text-[36px] font-bold mb-[48px]">GET IN TOUCH</div>
        <ContactForm darkMode={darkMode} />
      </section>
    </>
  );
};

export default Contact;
