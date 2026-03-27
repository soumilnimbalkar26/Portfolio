import React from "react";
import { useSelector } from "react-redux";

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
        className={`min-h-screen flex justify-center items-center ${darkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}
      >
        <div>
          <div
            className="text-[24px] mb-[12px] font-bold text-center text-light-primary dark:text-dark-primary"
          >
            PROFICIENCY
          </div>
          <div
            className="text-[36px] font-bold mb-[64px] text-center"
          >
            Expertise and Tools
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 max-w-[900px]">
            {skills?.map((el, index) => {
              return (
                <div
                  key={index}
                  className={`px-[24px] py-[12px] rounded-[8px] w-fit border shadow-sm transition-colors duration-300 ${
                    darkMode 
                      ? "bg-gray-800 border-gray-700 text-gray-200" 
                      : "bg-white border-gray-200 text-gray-800"
                  }`}
                >
                  {el}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
